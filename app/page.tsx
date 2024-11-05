import Image from "next/image";
import { DownloadResumeBtn } from "../components/download-resume-btn";

const Home = () => {
  return (
    <div className="h-svh flex items-center px-[74px]">
      <div className=" bg-purple-300 flex gap-[98px]">
        <div className="bg-green-500">
          <div>
            <div className="text-[44px]">
              <p>Hi, I'm Hannah,</p>
              <p>Software Engineer</p>
            </div>
            <div className="text-[16px] py-[8px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              quos illo commodi dignissimos alias asperiores impedit deleniti
              quia sed molestias veniam error quo odit ad possimus, dolores sit
              vel ipsum.
            </div>
          </div>
          <DownloadResumeBtn />
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
