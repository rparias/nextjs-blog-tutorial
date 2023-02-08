import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        {/* Link does not refresh the whole page as using <a> */}
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}