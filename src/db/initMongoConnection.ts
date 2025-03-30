import mongoose from 'mongoose';
import getEnvVar from '../utils/getEnvVar.ts';

export default async function initMongoConnection() {
    const user = getEnvVar('MONGO_USER');
    const pwd = getEnvVar('MONGO_PASSWORD');
    const url = getEnvVar('MONGO_URL');
    const db = getEnvVar<string>('MONGO_DB', 'ContactsList');
    await mongoose.connect(
        `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster`
    );
}
