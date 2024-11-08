import { LuMail, LuPhone } from "react-icons/lu";
import socials from "../../data/socials.json";
import SocialButton from "../../components/social-button";

export default function Contact() {
  return (
    <div className="py-[30px] px-[30px] md:py-[58px] md:px-[150px]">
      <div>
        <div className="text-[30px] md:text-[44px] mb-[26px] md:mb-[36px]">
          Contact
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="text-[24px] bg-neutral-700/10 rounded-full p-[12px]">
            <LuMail />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-neutral-400">Email</span>
            <span>me@hannahhp.com</span>
          </div>
        </div>
        <hr className="my-[30px]" />
      </div>

      <div className="text-[18px] md:text-[20px] mt-[10px] mb-[4px]">
        Socials:
      </div>
      <div className="flex flex-col md:flex-row gap-[16px] max-w-[600px]">
        {socials.map((social) => (
          <SocialButton key={social.name} social={social} />
        ))}
      </div>
    </div>
  );
}
