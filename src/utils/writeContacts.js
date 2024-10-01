import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    // Перетворення об'єкта на JSON-рядок з відступами для кращого форматування
    const jsonData = JSON.stringify(updatedContacts, null, 2);

    // Запис даних у файл за шляхом PATH_DB
    await fs.writeFile(PATH_DB, jsonData, 'utf-8');

    console.log('Contacts successfully written to db.json');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error; // Якщо сталася помилка, кидаємо її далі
  }
};
