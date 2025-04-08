import Image from "next/image";
import { DownloadResumeBtn } from "../components/download-resume-btn";

const Home = () => {
  return (
    <div>
      <div className="hidden md:block">
        <AppContent />
      </div>
      <div className=" md:hidden">
        <MobileAppContent />
      </div>
    </div>
  );
};

export default Home;

function AppContent() {
  return (
    <div className="h-svh flex items-center px-[74px]">
      <div className="flex gap-[80px]">
        <div className="min-w-[280px]">
          <div>
            <div className="text-[44px]">
              <p>Hi, I'm Hannah,</p>
              {/* <p>Software Engineer</p> */}
            </div>
            <div className="text-[16px] py-[8px]">
              {/* <p>
                I'm a full-stack software engineer based in Toronto, with a
                degree in computer programming. For the past two years, I've
                been building products with a focus on clean code and thoughtful
                system design.
              </p> */}
              {/* <p className="mt-[10px]">
                Away from the keyboard, I find inspiration in nature and
                creative expression through painting.
              </p> */}
            </div>
          </div>
          {/* <DownloadResumeBtn /> */}
        </div>
        <div className="w-[250px] flex-none">
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
}

function MobileAppContent() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="max-w-[175px] mx-auto">
        <Image
          src="/assets/images/hannah.jpeg"
          alt="Hannah's Image"
          width={175}
          height={180}
          layout="responsive"
          className="rounded-full"
        />
      </div>
      <div className="mt-[20px]">
        <div>
          {/* <div className="text-[33px]">
            <p>Hi, I'm Hannah,</p>
            <p>Software Engineer</p>
          </div>
          <div className="text-[16px] py-[8px] max-w-md mx-auto">
            <p>
              I'm a full-stack software engineer based in Toronto, with a degree
              in computer programming. For the past two years, I've been
              building products with a focus on clean code and thoughtful system
              design.
            </p>
            <p className="mt-[10px]">
              Away from the keyboard, I find inspiration in nature and creative
              expression through painting.
            </p>
          </div> */}
        </div>
        {/* <DownloadResumeBtn /> */}
      </div>
    </div>
  );
}
