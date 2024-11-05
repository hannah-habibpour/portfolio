import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-svh overflow-hidden px-[38px] py-[22px]">
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
      <div className="h-svh flex items-center px-[74px]">
        <div className=" bg-purple-300 flex gap-[98px]">
          <div className="bg-green-500">
            <div>
              <div className="text-[44px]">
                <p>Hi, I'm Hannah,</p>
                <p>Software Engineer</p>
              </div>
              <div className="text-[16px] py-[8px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit quos illo commodi dignissimos alias asperiores impedit
                deleniti quia sed molestias veniam error quo odit ad possimus,
                dolores sit vel ipsum.
              </div>
            </div>
            <button className="w-[208px] h-[47px] text-[20px] mt-[18px] bg-[#FF6464] text-white">
              Download Resume
            </button>
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
    </div>
  );
};

export default Home;
