import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Some Text</div>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
}
