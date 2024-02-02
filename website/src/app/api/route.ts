import { connectToDatabase, testCollection } from '@/app/lib/mongodb';

export async function POST() {
    const data = { name: 'test' };
    try {
        const database = await connectToDatabase();
        await database.collection(testCollection).insertOne(data);
    } catch (e) {
        console.error(e);
    }

    return new Response('Success', { status: 200 });
}
