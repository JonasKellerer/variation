import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (uri === undefined) {
    throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

const databaseName = 'variationDatabase';
export const testCollection = 'testCollection';
export const connectToDatabase = async () => {
    return (await clientPromise).db(databaseName);
};
