// Translations
const translations: Record<string, Record<string, string>> = {
  en: {
    menu: 'Menu',
    dashboard: 'Dashboard',
    history: 'History',
    settings: 'Settings',
    privacy: 'Privacy Policy',
    help: 'Help & Support',
    tempEmail: 'Temporary Email Address',
    generate: 'Generate New',
    securePassword: 'Secure Password',
    smsInbox: 'SMS & OTP Inbox',
    searchMessages: 'Search messages...',
    refresh: 'Refresh',
    loadMore: 'Load More',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    privacyPolicy: 'Privacy Policy',
    privacyContent: 'This is a client-side only application. No data is sent to any server. All emails, passwords, and messages are generated and stored locally in your browser using IndexedDB and localStorage. Your privacy is our priority.',
    helpSupport: 'Help & Support',
    chatbotWelcome: 'Welcome! How can I help you today?',
    howToUse: 'How to use?',
    isSafe: 'Is it safe?',
    howLong: 'How long stored?',
    emailsGenerated: 'Emails Generated',
    messagesReceived: 'Messages Received',
    storageUsed: 'Storage Used'
  },
  hi: {
    menu: 'मेनू',
    dashboard: 'डैशबोर्ड',
    history: 'इतिहास',
    settings: 'सेटिंग्स',
    privacy: 'गोपनीयता नीति',
    help: 'मदद और सहायता',
    tempEmail: 'अस्थायी ईमेल पता',
    generate: 'नया बनाएं',
    securePassword: 'सुरक्षित पासवर्ड',
    smsInbox: 'SMS और OTP इनबॉक्स',
    searchMessages: 'संदेश खोजें...',
    refresh: 'ताज़ा करें',
    loadMore: 'और लोड करें',
    weak: 'कमजोर',
    medium: 'मध्यम',
    strong: 'मजबूत',
    privacyPolicy: 'गोपनीयता नीति',
    privacyContent: 'यह केवल क्लाइंट-साइड एप्लिकेशन है। कोई डेटा सर्वर पर नहीं भेजा जाता।',
    helpSupport: 'मदद और सहायता',
    chatbotWelcome: 'स्वागत है! मैं आपकी कैसे मदद कर सकता हूं?',
    howToUse: 'कैसे उपयोग करें?',
    isSafe: 'क्या यह सुरक्षित है?',
    howLong: 'कितने समय तक संग्रहीत?',
    emailsGenerated: 'ईमेल उत्पन्न',
    messagesReceived: 'संदेश प्राप्त',
    storageUsed: 'उपयोग किया गया स्टोरेज'
  },
  es: {
    menu: 'Menú',
    dashboard: 'Tablero',
    history: 'Historial',
    settings: 'Configuración',
    privacy: 'Política de Privacidad',
    help: 'Ayuda y Soporte',
    tempEmail: 'Dirección de Correo Temporal',
    generate: 'Generar Nuevo',
    securePassword: 'Contraseña Segura',
    smsInbox: 'Bandeja SMS y OTP',
    searchMessages: 'Buscar mensajes...',
    refresh: 'Actualizar',
    loadMore: 'Cargar Más',
    weak: 'Débil',
    medium: 'Medio',
    strong: 'Fuerte',
    privacyPolicy: 'Política de Privacidad',
    privacyContent: 'Esta es una aplicación solo del lado del cliente. No se envían datos a ningún servidor.',
    helpSupport: 'Ayuda y Soporte',
    chatbotWelcome: '¡Bienvenido! ¿Cómo puedo ayudarte hoy?',
    howToUse: '¿Cómo usar?',
    isSafe: '¿Es seguro?',
    howLong: '¿Cuánto tiempo almacenado?',
    emailsGenerated: 'Correos Generados',
    messagesReceived: 'Mensajes Recibidos',
    storageUsed: 'Almacenamiento Usado'
  },
  fr: {
    menu: 'Menu',
    dashboard: 'Tableau de bord',
    history: 'Historique',
    settings: 'Paramètres',
    privacy: 'Politique de Confidentialité',
    help: 'Aide et Support',
    tempEmail: 'Adresse Email Temporaire',
    generate: 'Générer Nouveau',
    securePassword: 'Mot de Passe Sécurisé',
    smsInbox: 'Boîte SMS et OTP',
    searchMessages: 'Rechercher des messages...',
    refresh: 'Actualiser',
    loadMore: 'Charger Plus',
    weak: 'Faible',
    medium: 'Moyen',
    strong: 'Fort',
    privacyPolicy: 'Politique de Confidentialité',
    privacyContent: 'Il s\'agit d\'une application côté client uniquement. Aucune donnée n\'est envoyée à un serveur.',
    helpSupport: 'Aide et Support',
    chatbotWelcome: 'Bienvenue! Comment puis-je vous aider aujourd\'hui?',
    howToUse: 'Comment utiliser?',
    isSafe: 'Est-ce sûr?',
    howLong: 'Combien de temps stocké?',
    emailsGenerated: 'Emails Générés',
    messagesReceived: 'Messages Reçus',
    storageUsed: 'Stockage Utilisé'
  },
  de: {
    menu: 'Menü',
    dashboard: 'Dashboard',
    history: 'Verlauf',
    settings: 'Einstellungen',
    privacy: 'Datenschutz',
    help: 'Hilfe & Support',
    tempEmail: 'Temporäre E-Mail-Adresse',
    generate: 'Neu Generieren',
    securePassword: 'Sicheres Passwort',
    smsInbox: 'SMS & OTP Posteingang',
    searchMessages: 'Nachrichten suchen...',
    refresh: 'Aktualisieren',
    loadMore: 'Mehr Laden',
    weak: 'Schwach',
    medium: 'Mittel',
    strong: 'Stark',
    privacyPolicy: 'Datenschutz',
    privacyContent: 'Dies ist eine reine Client-seitige Anwendung. Es werden keine Daten an einen Server gesendet.',
    helpSupport: 'Hilfe & Support',
    chatbotWelcome: 'Willkommen! Wie kann ich Ihnen heute helfen?',
    howToUse: 'Wie benutzt man?',
    isSafe: 'Ist es sicher?',
    howLong: 'Wie lange gespeichert?',
    emailsGenerated: 'Emails Generiert',
    messagesReceived: 'Nachrichten Empfangen',
    storageUsed: 'Genutzter Speicher'
  },
  zh: {
    menu: '菜单',
    dashboard: '仪表板',
    history: '历史',
    settings: '设置',
    privacy: '隐私政策',
    help: '帮助与支持',
    tempEmail: '临时电子邮件地址',
    generate: '生成新的',
    securePassword: '安全密码',
    smsInbox: 'SMS和OTP收件箱',
    searchMessages: '搜索消息...',
    refresh: '刷新',
    loadMore: '加载更多',
    weak: '弱',
    medium: '中',
    strong: '强',
    privacyPolicy: '隐私政策',
    privacyContent: '这是一个仅客户端应用程序。不会将数据发送到任何服务器。',
    helpSupport: '帮助与支持',
    chatbotWelcome: '欢迎！我今天能帮您什么？',
    howToUse: '如何使用？',
    isSafe: '安全吗？',
    howLong: '存储多久？',
    emailsGenerated: '生成的邮件',
    messagesReceived: '收到的消息',
    storageUsed: '已用存储'
  },
  ja: {
    menu: 'メニュー',
    dashboard: 'ダッシュボード',
    history: '履歴',
    settings: '設定',
    privacy: 'プライバシーポリシー',
    help: 'ヘルプとサポート',
    tempEmail: '一時メールアドレス',
    generate: '新規生成',
    securePassword: '安全なパスワード',
    smsInbox: 'SMSとOTP受信箱',
    searchMessages: 'メッセージを検索...',
    refresh: '更新',
    loadMore: 'もっと読み込む',
    weak: '弱い',
    medium: '中',
    strong: '強い',
    privacyPolicy: 'プライバシーポリシー',
    privacyContent: 'これはクライアント側のみのアプリケーションです。データはサーバーに送信されません。',
    helpSupport: 'ヘルプとサポート',
    chatbotWelcome: 'ようこそ！今日はどのようにお手伝いできますか？',
    howToUse: '使い方は？',
    isSafe: '安全ですか？',
    howLong: 'どのくらい保存されますか？',
    emailsGenerated: '生成されたメール',
    messagesReceived: '受信したメッセージ',
    storageUsed: '使用されたストレージ'
  },
  ar: {
    menu: 'القائمة',
    dashboard: 'لوحة القيادة',
    history: 'التاريخ',
    settings: 'الإعدادات',
    privacy: 'سياسة الخصوصية',
    help: 'المساعدة والدعم',
    tempEmail: 'عنوان البريد الإلكتروني المؤقت',
    generate: 'إنشاء جديد',
    securePassword: 'كلمة مرور آمنة',
    smsInbox: 'صندوق الوارد SMS و OTP',
    searchMessages: 'البحث في الرسائل...',
    refresh: 'تحديث',
    loadMore: 'تحميل المزيد',
    weak: 'ضعيف',
    medium: 'متوسط',
    strong: 'قوي',
    privacyPolicy: 'سياسة الخصوصية',
    privacyContent: 'هذا تطبيق من جانب العميل فقط. لا يتم إرسال البيانات إلى أي خادم.',
    helpSupport: 'المساعدة والدعم',
    chatbotWelcome: 'مرحبا! كيف يمكنني مساعدتك اليوم؟',
    howToUse: 'كيفية الاستخدام؟',
    isSafe: 'هل هو آمن؟',
    howLong: 'كم من الوقت المخزنة؟',
    emailsGenerated: 'رسائل البريد الإلكتروني التي تم إنشاؤها',
    messagesReceived: 'الرسائل المستلمة',
    storageUsed: 'التخزين المستخدم'
  },
  pt: {
    menu: 'Menu',
    dashboard: 'Painel',
    history: 'Histórico',
    settings: 'Configurações',
    privacy: 'Política de Privacidade',
    help: 'Ajuda e Suporte',
    tempEmail: 'Endereço de Email Temporário',
    generate: 'Gerar Novo',
    securePassword: 'Senha Segura',
    smsInbox: 'Caixa de Entrada SMS e OTP',
    searchMessages: 'Pesquisar mensagens...',
    refresh: 'Atualizar',
    loadMore: 'Carregar Mais',
    weak: 'Fraco',
    medium: 'Médio',
    strong: 'Forte',
    privacyPolicy: 'Política de Privacidade',
    privacyContent: 'Este é um aplicativo apenas do lado do cliente. Nenhum dado é enviado para qualquer servidor.',
    helpSupport: 'Ajuda e Suporte',
    chatbotWelcome: 'Bem-vindo! Como posso ajudá-lo hoje?',
    howToUse: 'Como usar?',
    isSafe: 'É seguro?',
    howLong: 'Quanto tempo armazenado?',
    emailsGenerated: 'Emails Gerados',
    messagesReceived: 'Mensagens Recebidas',
    storageUsed: 'Armazenamento Usado'
  },
  ru: {
    menu: 'Меню',
    dashboard: 'Панель управления',
    history: 'История',
    settings: 'Настройки',
    privacy: 'Политика конфиденциальности',
    help: 'Помощь и поддержка',
    tempEmail: 'Временный адрес электронной почты',
    generate: 'Создать новый',
    securePassword: 'Безопасный пароль',
    smsInbox: 'Входящие SMS и OTP',
    searchMessages: 'Поиск сообщений...',
    refresh: 'Обновить',
    loadMore: 'Загрузить еще',
    weak: 'Слабый',
    medium: 'Средний',
    strong: 'Сильный',
    privacyPolicy: 'Политика конфиденциальности',
    privacyContent: 'Это только клиентское приложение. Никакие данные не отправляются на сервер.',
    helpSupport: 'Помощь и поддержка',
    chatbotWelcome: 'Добро пожаловать! Как я могу вам помочь сегодня?',
    howToUse: 'Как использовать?',
    isSafe: 'Это безопасно?',
    howLong: 'Как долго хранится?',
    emailsGenerated: 'Созданные электронные письма',
    messagesReceived: 'Полученные сообщения',
    storageUsed: 'Использовано хранилища'
  }
};

let currentLang = 'en';

// Initialize i18n
export function initI18n(): void {
  currentLang = localStorage.getItem('language') || 'en';
  const langSelect = document.getElementById('langSelect') as HTMLSelectElement;
  if (langSelect) langSelect.value = currentLang;
  applyTranslations();
}

// Set language
export function setLanguage(lang: string): void {
  currentLang = lang;
  localStorage.setItem('language', lang);
  applyTranslations();
}

// Apply translations
function applyTranslations(): void {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Apply placeholder translations
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && translations[currentLang] && translations[currentLang][key]) {
      (el as HTMLInputElement).placeholder = translations[currentLang][key];
    }
  });
}

// Get translation
export function t(key: string): string {
  return translations[currentLang]?.[key] || key;
}
