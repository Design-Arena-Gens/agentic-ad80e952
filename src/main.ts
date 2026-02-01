import { initDB, saveEmail, saveMessage, getEmails, getMessages, cleanOldData } from './db';
import { generateEmail, generatePassword, generateMessage } from './generators';
import { copyToClipboard, showToast, requestNotificationPermission, showNotification } from './utils';
import { initI18n, setLanguage } from './i18n';
import { initTheme, toggleTheme } from './theme';

// Global state
let currentEmail = '';
let currentPassword = '';
let displayedMessages: any[] = [];
let allMessages: any[] = [];
let messageInterval: number | null = null;

// Initialize app
async function init() {
  await initDB();
  await cleanOldData();
  initTheme();
  initI18n();
  setupEventListeners();
  await requestNotificationPermission();

  // Generate initial email and password
  await handleGenerateEmail();
  handleGeneratePassword();

  // Start auto-generating messages
  startMessageGeneration();

  // Load existing messages
  await loadMessages();

  // Update dashboard stats
  updateDashboard();
}

// Setup event listeners
function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle?.addEventListener('click', toggleTheme);

  // Language selector
  const langSelect = document.getElementById('langSelect') as HTMLSelectElement;
  langSelect?.addEventListener('change', (e) => {
    setLanguage((e.target as HTMLSelectElement).value);
  });

  // Menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');

  menuToggle?.addEventListener('click', () => {
    sidebar?.classList.add('active');
  });

  sidebarOverlay?.addEventListener('click', () => {
    sidebar?.classList.remove('active');
  });

  sidebarClose?.addEventListener('click', () => {
    sidebar?.classList.remove('active');
  });

  // Email generation
  const generateEmailBtn = document.getElementById('generateEmail');
  generateEmailBtn?.addEventListener('click', handleGenerateEmail);

  // Password generation
  const generatePasswordBtn = document.getElementById('generatePassword');
  generatePasswordBtn?.addEventListener('click', handleGeneratePassword);

  // Copy buttons
  const copyEmail = document.getElementById('copyEmail');
  copyEmail?.addEventListener('click', () => handleCopy(currentEmail, copyEmail as HTMLElement));

  const copyPassword = document.getElementById('copyPassword');
  copyPassword?.addEventListener('click', () => handleCopy(currentPassword, copyPassword as HTMLElement));

  // Refresh messages
  const refreshMessages = document.getElementById('refreshMessages');
  refreshMessages?.addEventListener('click', handleRefreshMessages);

  // Load more
  const loadMore = document.getElementById('loadMore');
  loadMore?.addEventListener('click', handleLoadMore);

  // Search
  const searchInput = document.getElementById('searchInput') as HTMLInputElement;
  searchInput?.addEventListener('input', handleSearch);

  // Sidebar links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      handleNavigation(href);
      sidebar?.classList.remove('active');
    });
  });

  // Privacy modal
  const privacyLink = document.getElementById('privacyLink');
  const privacyModal = document.getElementById('privacyModal');
  const privacyOverlay = document.getElementById('privacyOverlay');
  const privacyClose = document.getElementById('privacyClose');

  privacyLink?.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal?.classList.add('active');
  });

  privacyOverlay?.addEventListener('click', () => {
    privacyModal?.classList.remove('active');
  });

  privacyClose?.addEventListener('click', () => {
    privacyModal?.classList.remove('active');
  });

  // Chatbot modal
  const chatbotLink = document.getElementById('chatbotLink');
  const chatbotModal = document.getElementById('chatbotModal');
  const chatbotOverlay = document.getElementById('chatbotOverlay');
  const chatbotClose = document.getElementById('chatbotClose');

  chatbotLink?.addEventListener('click', (e) => {
    e.preventDefault();
    chatbotModal?.classList.add('active');
  });

  chatbotOverlay?.addEventListener('click', () => {
    chatbotModal?.classList.remove('active');
  });

  chatbotClose?.addEventListener('click', () => {
    chatbotModal?.classList.remove('active');
  });

  // Quick replies
  document.querySelectorAll('.quick-reply').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const question = (e.currentTarget as HTMLElement).getAttribute('data-question');
      handleChatbotQuestion(question);
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'k') {
        e.preventDefault();
        searchInput?.focus();
      } else if (e.key === 'g') {
        e.preventDefault();
        handleGenerateEmail();
      }
    } else if (e.key === 'Escape') {
      sidebar?.classList.remove('active');
      privacyModal?.classList.remove('active');
      chatbotModal?.classList.remove('active');
    }
  });
}

// Handle email generation
async function handleGenerateEmail() {
  currentEmail = generateEmail();
  const emailField = document.getElementById('emailField') as HTMLInputElement;
  if (emailField) emailField.value = currentEmail;

  await saveEmail({
    email: currentEmail,
    timestamp: Date.now()
  });

  updateDashboard();
}

// Handle password generation
function handleGeneratePassword() {
  currentPassword = generatePassword();
  const passwordField = document.getElementById('passwordField') as HTMLInputElement;
  if (passwordField) passwordField.value = currentPassword;

  updatePasswordStrength(currentPassword);
}

// Update password strength
function updatePasswordStrength(password: string) {
  const strengthBar = document.getElementById('strengthBar');
  const strengthText = document.getElementById('strengthText');

  if (!strengthBar || !strengthText) return;

  let strength: 'weak' | 'medium' | 'strong' = 'weak';
  let text = 'Weak';

  if (password.length >= 16) {
    strength = 'strong';
    text = 'Strong';
  } else if (password.length >= 12) {
    strength = 'medium';
    text = 'Medium';
  }

  strengthBar.className = 'strength-bar ' + strength;
  strengthText.textContent = text;
  strengthText.setAttribute('data-i18n', strength);
}

// Handle copy
async function handleCopy(text: string, button: HTMLElement) {
  await copyToClipboard(text);
  button.classList.add('copied');
  showToast('Copied to clipboard!');

  setTimeout(() => {
    button.classList.remove('copied');
  }, 2000);
}

// Start message generation
function startMessageGeneration() {
  if (messageInterval) clearInterval(messageInterval);

  messageInterval = window.setInterval(async () => {
    const message = generateMessage();
    await saveMessage(message);

    allMessages.unshift(message);
    displayedMessages.unshift(message);
    renderMessages();
    updateDashboard();

    // Show notification for OTP
    if (message.otp) {
      showNotification(`${message.sender}: ${message.otp}`, {
        body: message.subject,
        icon: '/icon-192.png'
      });
    }
  }, Math.random() * 20000 + 10000); // 10-30 seconds
}

// Handle refresh messages
async function handleRefreshMessages() {
  const message = generateMessage();
  await saveMessage(message);

  allMessages.unshift(message);
  displayedMessages.unshift(message);
  renderMessages();
  updateDashboard();

  if (message.otp) {
    showNotification(`${message.sender}: ${message.otp}`, {
      body: message.subject,
      icon: '/icon-192.png'
    });
  }
}

// Load messages from DB
async function loadMessages() {
  const messages = await getMessages();
  allMessages = messages;
  displayedMessages = messages.slice(0, 5);
  renderMessages();
}

// Handle load more
function handleLoadMore() {
  const currentLength = displayedMessages.length;
  const newMessages = allMessages.slice(currentLength, currentLength + 5);
  displayedMessages.push(...newMessages);
  renderMessages();
}

// Handle search
function handleSearch(e: Event) {
  const query = (e.target as HTMLInputElement).value.toLowerCase();

  if (!query) {
    displayedMessages = allMessages.slice(0, 5);
  } else {
    displayedMessages = allMessages.filter(msg =>
      msg.sender.toLowerCase().includes(query) ||
      msg.subject.toLowerCase().includes(query) ||
      msg.body.toLowerCase().includes(query)
    );
  }

  renderMessages();
}

// Render messages
function renderMessages() {
  const container = document.getElementById('messagesContainer');
  if (!container) return;

  if (displayedMessages.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No messages yet. Click refresh to generate a new message!</p>';
    return;
  }

  container.innerHTML = displayedMessages.map(msg => {
    const date = new Date(msg.timestamp);
    const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    let otpHtml = '';
    if (msg.otp) {
      otpHtml = `
        <div class="otp-box">
          <span>OTP: ${msg.otp}</span>
          <button class="otp-copy" onclick="handleOtpCopy('${msg.otp}', this)">
            <svg class="icon copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            <svg class="icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="display: none;">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </button>
        </div>
      `;
    }

    return `
      <div class="message-card">
        <div class="message-header">
          <span class="message-sender">${msg.sender}</span>
          <span class="message-time">${timeStr}</span>
        </div>
        <div class="message-subject">${msg.subject}</div>
        <div class="message-body">${msg.body}</div>
        ${otpHtml}
      </div>
    `;
  }).join('');
}

// Handle OTP copy (global function for onclick)
(window as any).handleOtpCopy = async function(otp: string, button: HTMLElement) {
  await copyToClipboard(otp);
  showToast('OTP copied to clipboard!');

  const copyIcon = button.querySelector('.copy-icon') as HTMLElement;
  const checkIcon = button.querySelector('.check-icon') as HTMLElement;

  if (copyIcon) copyIcon.style.display = 'none';
  if (checkIcon) checkIcon.style.display = 'block';

  setTimeout(() => {
    if (copyIcon) copyIcon.style.display = 'block';
    if (checkIcon) checkIcon.style.display = 'none';
  }, 2000);
};

// Handle navigation
function handleNavigation(href: string | null) {
  const dashboardSection = document.getElementById('dashboardSection');
  const mainSection = document.querySelector('.main') as HTMLElement;

  if (href === '#dashboard') {
    mainSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'block';
    updateDashboard();
  } else if (href === '#history') {
    mainSection.style.display = 'block';
    if (dashboardSection) dashboardSection.style.display = 'none';
    displayedMessages = allMessages;
    renderMessages();
  } else if (href === '#settings') {
    alert('Settings panel coming soon!');
  } else {
    mainSection.style.display = 'block';
    if (dashboardSection) dashboardSection.style.display = 'none';
  }
}

// Update dashboard
async function updateDashboard() {
  const emails = await getEmails();
  const messages = await getMessages();

  const emailsCount = document.getElementById('emailsCount');
  const messagesCount = document.getElementById('messagesCount');
  const storageUsed = document.getElementById('storageUsed');

  if (emailsCount) emailsCount.textContent = emails.length.toString();
  if (messagesCount) messagesCount.textContent = messages.length.toString();

  if (storageUsed) {
    const size = new Blob([JSON.stringify(emails) + JSON.stringify(messages)]).size;
    storageUsed.textContent = `${(size / 1024).toFixed(2)} KB`;
  }
}

// Handle chatbot questions
function handleChatbotQuestion(question: string | null) {
  const chatbotMessages = document.getElementById('chatbotMessages');
  if (!chatbotMessages) return;

  let answer = '';

  switch (question) {
    case 'how-to-use':
      answer = 'Simply click "Generate New" to create a temporary email. Messages will appear automatically in the inbox below. Click on OTP codes to copy them instantly!';
      break;
    case 'is-safe':
      answer = 'Yes! Everything runs in your browser. No data is sent to any server. All emails and messages are stored locally on your device using IndexedDB.';
      break;
    case 'how-long':
      answer = 'Data is stored locally on your device. We automatically keep the last 100 emails and messages to save storage space.';
      break;
    default:
      answer = 'I\'m here to help! Choose one of the quick reply options above.';
  }

  const userMessage = document.createElement('div');
  userMessage.className = 'chat-message user-message';
  userMessage.innerHTML = `<p>${document.querySelector(`[data-question="${question}"]`)?.textContent || 'Question'}</p>`;
  chatbotMessages.appendChild(userMessage);

  setTimeout(() => {
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot-message';
    botMessage.innerHTML = `<p>${answer}</p>`;
    chatbotMessages.appendChild(botMessage);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 500);
}

// Start the app
init();
