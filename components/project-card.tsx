import Image from "next/image";
import Link from "next/link";

import { ProjectType } from "../contracts/types";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="md:flex md:items-start mb-[30px] md:mb-[10px]">
      <div className="flex-none md:pt-[10px] md:mr-[14px]">
        <Link href={project.projectUrl} className="w-full">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={338}
            height={230}
          />
        </Link>
      </div>
      <div className="max-w-[338px] md:max-w-[680px]">
        <Link href={project.projectUrl} className="w-full">
          <div className="text-[18px] md:text-[22px]">{project.title}</div>
          <div className="text-[12px] md:text-[14px] text-white my-[6px]">
            <span className="bg-[#142850] py-[2px] px-[8px] rounded-xl">
              {project.startDate}
            </span>
          </div>
          <div className="text-[16px] mt-[4px] line-clamp-2 md:line-clamp-4">
            {project.description}
          </div>
        </Link>
      </div>
    </div>
  );
}
