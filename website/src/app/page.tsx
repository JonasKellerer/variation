import Link from 'next/link';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1>Variation study</h1>
            <Link href='/survey'>Zur Umfrage</Link>
        </main>
    );
}
