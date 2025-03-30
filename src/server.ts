import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import pino from 'pino-http';
import getEnvVar from './utils/getEnvVar.ts';
import { getAllContacts, getContactById } from './services/contacts.ts';
import { contact } from './db/models/contacts.ts';

export function setupServer() {
    const PORT = getEnvVar<number>('PORT', 3000);
    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(
        pino({
            transport: {
                target: 'pino-pretty',
            },
        })
    );

    app.get('/', (req: Request, res: Response): void => {
        res.json({ message: 'Succesfull request' });
    });

    app.get('/contacts', async (req: Request, res: Response) => {
        const data: contact[] = await getAllContacts();
        res.status(200).json({
            status: 200,
            message: 'Successfully found contacts!',
            data,
        });
    });

    app.get('/contacts/:contactId', async (req: Request, res: Response) => {
        const contactId: string = req.params.contactId;
        const data = await getContactById(contactId);
        if (data) {
            res.status(200).json({
                status: 200,
                message: `Successfully found contact with id ${contactId}!`,
                data,
            });
        } else {
            res.status(404).json({
                message: `Contact not found`,
            });
        }
    });

    app.use((req: Request, res: Response): void => {
        res.status(404).json({ status: 404, message: 'Page not found!' });
    });

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({
            status: '500',
            message: err.message,
        });
    });

    app.listen(PORT, () => {
        console.log(`Server is runnig on port ${PORT}`);
    });
}
