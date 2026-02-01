import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface TempMailDB extends DBSchema {
  emails: {
    key: number;
    value: {
      email: string;
      timestamp: number;
    };
    indexes: { 'by-timestamp': number };
  };
  messages: {
    key: number;
    value: {
      sender: string;
      subject: string;
      body: string;
      otp?: string;
      timestamp: number;
    };
    indexes: { 'by-timestamp': number };
  };
}

let db: IDBPDatabase<TempMailDB>;

export async function initDB() {
  db = await openDB<TempMailDB>('tempmail-db', 1, {
    upgrade(db) {
      // Create emails store
      const emailStore = db.createObjectStore('emails', {
        keyPath: 'timestamp',
        autoIncrement: false
      });
      emailStore.createIndex('by-timestamp', 'timestamp');

      // Create messages store
      const messageStore = db.createObjectStore('messages', {
        keyPath: 'timestamp',
        autoIncrement: false
      });
      messageStore.createIndex('by-timestamp', 'timestamp');
    },
  });
}

export async function saveEmail(email: { email: string; timestamp: number }) {
  await db.add('emails', email);
}

export async function saveMessage(message: {
  sender: string;
  subject: string;
  body: string;
  otp?: string;
  timestamp: number;
}) {
  await db.add('messages', message);
}

export async function getEmails() {
  const tx = db.transaction('emails', 'readonly');
  const index = tx.store.index('by-timestamp');
  const emails = await index.getAll();
  return emails.reverse(); // Most recent first
}

export async function getMessages() {
  const tx = db.transaction('messages', 'readonly');
  const index = tx.store.index('by-timestamp');
  const messages = await index.getAll();
  return messages.reverse(); // Most recent first
}

export async function cleanOldData() {
  // Keep only last 100 emails
  const emails = await getEmails();
  if (emails.length > 100) {
    const tx = db.transaction('emails', 'readwrite');
    const toDelete = emails.slice(100);
    for (const email of toDelete) {
      await tx.store.delete(email.timestamp);
    }
  }

  // Keep only last 100 messages
  const messages = await getMessages();
  if (messages.length > 100) {
    const tx = db.transaction('messages', 'readwrite');
    const toDelete = messages.slice(100);
    for (const msg of toDelete) {
      await tx.store.delete(msg.timestamp);
    }
  }
}
