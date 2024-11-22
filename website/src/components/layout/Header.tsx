import Link from 'next/link';

export function Header() {
    return (
        <header className={'sticky'}>
            <div className='mb-2 flex items-center justify-between border-b p-2 px-8'>
                <Logo />
                <Navigation />
                <CallToAction />
            </div>
        </header>
    );
}

function Logo() {
    return (
        <Link href='/' className='text-lg font-bold'>
            Varilis
        </Link>
    );
}

function Navigation() {
    return (
        <nav className='flex items-center justify-between p-4'>
            <ul className='flex space-x-4'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/survey'>Survey</Link>
                </li>
            </ul>
        </nav>
    );
}

function CallToAction() {
    return (
        <div className='flex items-center justify-center'>
            <Link href='/survey'>Take the survey</Link>
        </div>
    );
}
