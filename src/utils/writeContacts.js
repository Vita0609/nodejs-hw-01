import { readContacts } from './readContacts.js';
import { writeContacts } from './writeContacts.js';

export const addNewContact = async (newContact) => {
  try {
    // Зчитуємо поточні контакти
    const contacts = await readContacts();

    // Додаємо новий контакт до списку
    contacts.push(newContact);

    // Записуємо оновлені контакти у файл
    await writeContacts(contacts);
  } catch (error) {
    console.error('Error adding new contact:', error);
  }
};
