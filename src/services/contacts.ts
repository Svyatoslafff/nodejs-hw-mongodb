import { contact, contactsCollection } from '../db/models/contacts.ts';

export async function getAllContacts() {
    const data: contact[] = await contactsCollection.find();
    return data;
}

export async function getContactById(id: string) {
    const data: contact | null = await contactsCollection.findById(id);
    return data;
}
