import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    // Зчитуємо вміст файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');

    // Парсимо JSON у формат JavaScript об'єктів
    const contacts = JSON.parse(data);

    // Повертаємо отримані контакти
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error; // Викидаємо помилку, якщо не вдалося зчитати файл
  }
};
