import { LuMail, LuPhone } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="md:py-[58px] md:px-[150px]">
      <div>
        <div className="text-[30px] md:text-[44px] md:mb-[18px]">Contact</div>
        <div className="flex items-center gap-[8px]">
          <div className="text-[24px] bg-neutral-700/20 rounded-full p-[12px]">
            <LuMail />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-neutral-400">Email</span>
            <span>me@hannahhp.com</span>
          </div>
        </div>
      </div>
      {/* socials */}
      <div className="text-[18px] md:text-[20px] mt-[10px] mb-[4px]">
        Socials:
      </div>
      <div className="flex flex-col gap-[6px] max-w-[300px]">
        <div>
          <Link
            href="https://www.linkedin.com/in/hannah-habibpour/"
            className="bg-neutral-700/20 rounded-md p-[4px] w-full flex flex-row items-center justify-center gap-[8px]"
            target="_blank"
          >
            <span className="text-[28px]">
              <FaLinkedin />
            </span>
            <span className="font-medium text-[16px]">Linkedin</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
