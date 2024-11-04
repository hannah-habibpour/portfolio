import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mx-[38px] my-[24px] h-screen">
      <div className="flex bg-red-500 justify-between">
        <div>
          <p>Home</p>
        </div>
        <div className="bg-yellow-300 flex w-[220px] justify-between">
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
      <div className=" bg-purple-300 flex mx-[72px] gap-[28px]">
        <div className="bg-green-500">
          <div>
            <div className="text-[44px]">
              <p>Hi, I'm Hannah,</p>
              <p>Software Engineer</p>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              quos illo commodi dignissimos alias asperiores impedit deleniti
              quia sed molestias veniam error quo odit ad possimus, dolores sit
              vel ipsum.
            </p>
          </div>
          <button className="bg-blue-200">Download Resume</button>
        </div>
        <div className="max-w-[250px] mx-auto">
          <Image
            src="/assets/images/hannah.jpeg"
            alt="Hannah's Image"
            width={243}
            height={243}
            layout="responsive"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
