import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    // Читання даних з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');

    // Перетворення JSON-рядка у об'єкт
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error; // кидання помилки для подальшої обробки
  }
};
