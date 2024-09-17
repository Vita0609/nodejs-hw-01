import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContacts = Array.from({ length: number }, createFakeContact);

  try {
    const existData = await fs.readFile(PATH_DB, 'utf-8');
    const newData = [...JSON.parse(existData), ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error in operations', error);
  }
};

generateContacts(5);
