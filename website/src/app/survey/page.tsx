import Link from 'next/link';
import { connectToDatabase, testCollection } from '@/app/lib/mongodb';
import { z } from 'zod';

const DataSchema = z.object({
    _id: z.string(),
    name: z.string(),
});

export type Data = z.infer<typeof DataSchema>;

const DataArraySchema = z.array(DataSchema);

const getData = async () => {
    let data: Data[] = [];
    try {
        const database = await connectToDatabase();
        const rawData = await database.collection(testCollection).find({}).limit(20).toArray();
        data = DataArraySchema.parse(rawData.map((d) => ({ ...d, _id: d._id.toString() })));
    } catch (e) {
        console.error(e);
    }

    const returnedData = JSON.stringify(data);

    return {
        data: returnedData,
    };
};

export default async function Page() {
    const { data } = await getData();

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1>Survey</h1>
            <p>{data}</p>
            <Link href={'/'}>Back to Home</Link>
        </main>
    );
}
