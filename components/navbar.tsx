import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <p>Home</p>
      </div>
      <div className="flex w-[220px] justify-between">
        <p>
          <Link href="/projects">Projects</Link>
        </p>
        <p>
          <Link href="/blog">Blog</Link>
        </p>
        <p>
          <Link href="/contact">Contact</Link>
        </p>
      </div>
    </div>
  );
}
