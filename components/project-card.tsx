import Image from "next/image";

export default function ProjectCard({ project }: any) {
  return (
    <div className="md:flex md:items-start">
      <div className="flex-none md:pt-[10px] md:mr-[14px]">
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={339}
          height={230}
          layout=""
          className=""
        />
      </div>
      <div>
        <div className="text-[22px] md:text-[28px]">{project.title}</div>
        <div className="text-[16px] md:text-[18px] text-white">
          <span className="bg-[#142850] py-[2px] px-[8px] rounded-xl">
            {project.startDate}
          </span>
        </div>
        <div className="text-[16px] line-clamp-2">{project.description}</div>
      </div>
    </div>
  );
}
