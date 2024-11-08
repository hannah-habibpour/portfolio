import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuGithub, LuInstagram } from "react-icons/lu";

export default function SocialButton({ social }: any) {
  const socialIcon =
    social.name === "LinkedIn" ? (
      <FaLinkedin className="text-[#0077b5]" />
    ) : social.name === "Instagram" ? (
      <LuInstagram className="text-[#e4405f]" />
    ) : social.name === "GitHub" ? (
      <FaGithub />
    ) : null;

  return (
    <div className="w-full">
      <Link
        href={social.url}
        className="bg-neutral-700/20 rounded-md p-[4px] flex items-center justify-center gap-[8px]"
        target="_blank"
      >
        <span className="text-[28px]">{socialIcon}</span>
        <span className="font-medium text-[16px]">{social.name}</span>
      </Link>
    </div>
  );
}
