import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function ProjectsContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose-headings:mt-8 prose-headings:font-semibold prose-h2:text-4xl prose-h3:text-3xl mx-auto prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-invert max-w-[1024px] w-full md:p-[36px] p-[24px]">
      <div>
        <Link
          href="/projects"
          className="w-fit text-[16px] no-underline flex items-center gap-[2px] text-black"
        >
          <MdOutlineKeyboardArrowLeft className="text-[24px]" />
          <span className="font-light">Back</span>
        </Link>
        <hr className="mt-[12px] mb-[76px]" />
      </div>
      {children}
    </div>
  );
}
