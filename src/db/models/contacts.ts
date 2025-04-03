import mongoose, { model, Schema } from 'mongoose';

enum contactType {
    work = 'work',
    home = 'home',
    personal = 'personal',
}

export type contact = {
    name: string;
    phoneNumber: string;
    email?: string;
    isFavorite: boolean;
    contactType: contactType;
};

const contactsSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        phoneNumber: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: false,
        },
        isFavorite: {
            type: Boolean,
            default: false,
        },
        contactType: {
            type: String,
            enum: ['work', 'home', 'personal'],
            require: true,
            default: 'personal',
        },
    },
    {
        timestamps: true,
    }
);

export const contactsCollection = model('contacts', contactsSchema);
