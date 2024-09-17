import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existData = await fs.readFile(PATH_DB, 'utf-8');
    const newOneContact = JSON.parse(existData);

    const newContact = createFakeContact();

    newOneContact.push(newContact);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(newOneContact, null, 2),
      'utf-8',
    );

    console.log('Contact added successfully');
  } catch (error) {
    console.error('Error in operations', error);
  }
};

addOneContact();
