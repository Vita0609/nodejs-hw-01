import { promises as fs } from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../db/db.json');

export const writeContacts = async (data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(dbPath, jsonData, 'utf-8');
    console.log('Contacts successfully written to db.json');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};
const contacts = [
  { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
];

// Виклик функції для запису даних
writeContacts(contacts)
  .then(() => {
    console.log('Contacts записано успішно.');
  })
  .catch((error) => {
    console.error('Помилка запису:', error);
  });
