import { promises as fs } from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../db/db.json');

export const readContacts = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error;
  }
};
readContacts()
  .then((contacts) => {
    console.log('Contacts:', contacts); // виведення зчитаних контактів
  })
  .catch((error) => {
    console.error('Error reading contacts:', error); // обробка помилки
  });
