import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between fixed w-full top-0 left-0 bg-white px-[34px] pt-[18px]">
      <div>
        <p>
          <Link href="/">Home</Link>
        </p>
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
