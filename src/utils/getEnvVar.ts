import dotenv from 'dotenv';

dotenv.config();

export default function getEnvVar<T>(
    name: string,
    defaultValue?: T
): string | T {
    const value: string | undefined = process.env[name];

    if (value) return value;
    if (defaultValue) return defaultValue;

    throw new Error(`process.env[${name}] doesn't exist`);
}
