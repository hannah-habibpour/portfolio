import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hannah Portfolio</p>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
      <p>
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default Home;
