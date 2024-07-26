import { Db, MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

const databaseName = 'variationDatabase';
export const testCollection = 'testCollection';

export const connectToDatabase = async (): Promise<Db> => {
    if (process.env.NODE_ENV === 'production' && !clientPromise) {
        client = new MongoClient(uri);
        clientPromise = client.connect();
    }

    try {
        return (await clientPromise).db(databaseName);
    } catch (error) {
        console.error('Failed to connect to the database', error);
        throw new Error('Failed to connect to the database');
    }
};
