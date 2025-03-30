import initMongoConnection from './db/initMongoConnection.ts';
import { setupServer } from './server.ts';

async function bootStrap() {
    await initMongoConnection();
    setupServer();
}

bootStrap();
