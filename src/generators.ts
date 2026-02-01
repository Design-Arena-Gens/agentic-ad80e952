// Email domains
const EMAIL_DOMAINS = [
  'guerrillamail.com',
  'mailinator.com',
  'tempmail.org',
  '10minutemail.com',
  'throwaway.email',
  'temp-mail.org',
  'maildrop.cc',
  'yopmail.com',
  'sharklasers.com',
  'grr.la',
  'guerrillamail.net',
  'spam4.me',
  'trashmail.com',
  'temp-mail.io'
];

// Message templates
const MESSAGE_TEMPLATES = [
  {
    sender: 'Google',
    subjects: ['Verify your account', 'Security alert', 'Sign-in attempt'],
    body: 'Your verification code is {OTP}. Don\'t share this code with anyone.'
  },
  {
    sender: 'Facebook',
    subjects: ['Confirm your account', 'Password reset', 'Login code'],
    body: 'Use {OTP} to verify your Facebook account. This code expires in 10 minutes.'
  },
  {
    sender: 'WhatsApp',
    subjects: ['Phone verification', 'Account verification'],
    body: 'Your WhatsApp code is {OTP}. Don\'t share this code with others.'
  },
  {
    sender: 'Instagram',
    subjects: ['Confirmation code', 'Security code'],
    body: '{OTP} is your Instagram verification code. Keep it secure.'
  },
  {
    sender: 'Amazon',
    subjects: ['One-time password', 'Account verification'],
    body: 'Your Amazon verification code is {OTP}. Valid for 5 minutes.'
  },
  {
    sender: 'GitHub',
    subjects: ['Device verification', 'Two-factor code'],
    body: 'Your GitHub authentication code is {OTP}.'
  },
  {
    sender: 'Microsoft',
    subjects: ['Security code', 'Verification required'],
    body: 'Microsoft account security code: {OTP}. Don\'t give this code to anyone.'
  },
  {
    sender: 'Netflix',
    subjects: ['Verify your email', 'Account access code'],
    body: 'Use this code to verify your Netflix account: {OTP}'
  },
  {
    sender: 'Telegram',
    subjects: ['Login code', 'Telegram code'],
    body: 'Telegram code: {OTP}. Do not share this code with anyone!'
  },
  {
    sender: 'Discord',
    subjects: ['Verification code', 'Authentication required'],
    body: 'Your Discord verification code is {OTP}.'
  }
];

// Generate random string
function randomString(length: number): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Generate random number
function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate email
export function generateEmail(): string {
  const username = randomString(randomNumber(8, 12));
  const domain = EMAIL_DOMAINS[randomNumber(0, EMAIL_DOMAINS.length - 1)];
  return `${username}@${domain}`;
}

// Generate password
export function generatePassword(): string {
  const length = randomNumber(12, 16);
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const allChars = lowercase + uppercase + numbers + symbols;

  let password = '';

  // Ensure at least one of each type
  password += lowercase[randomNumber(0, lowercase.length - 1)];
  password += uppercase[randomNumber(0, uppercase.length - 1)];
  password += numbers[randomNumber(0, numbers.length - 1)];
  password += symbols[randomNumber(0, symbols.length - 1)];

  // Fill the rest randomly
  for (let i = password.length; i < length; i++) {
    password += allChars[randomNumber(0, allChars.length - 1)];
  }

  // Shuffle the password
  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}

// Generate OTP
function generateOTP(): string {
  const lengths = [4, 6, 8];
  const length = lengths[randomNumber(0, lengths.length - 1)];
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += randomNumber(0, 9).toString();
  }
  return otp;
}

// Generate message
export function generateMessage() {
  const template = MESSAGE_TEMPLATES[randomNumber(0, MESSAGE_TEMPLATES.length - 1)];
  const subject = template.subjects[randomNumber(0, template.subjects.length - 1)];
  const otp = generateOTP();
  const body = template.body.replace('{OTP}', otp);

  return {
    sender: template.sender,
    subject,
    body,
    otp,
    timestamp: Date.now()
  };
}
