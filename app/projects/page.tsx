import ProjectCard from "../../components/project-card";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <div className="py-[30px] px-[30px] md:py-[58px] md:px-[40px]">
      <div className="text-[30px] md:text-[44px] mb-[10px] md:mb-[18px]">
        Project
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
