import { ProjectType } from "../../contracts/types";
import projects from "../../data/projects.json";
import ProjectCard from "../../components/project-card";

export default function ProjectsPage() {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <div className="py-[30px] px-[30px] md:py-[58px] md:px-[40px]">
      <div className="text-[30px] md:text-[44px] mb-[10px] md:mb-[18px]">
        Project
      </div>
      <Projects projects={sortedProjects} />
    </div>
  );
}

interface ProjectsProps {
  projects: ProjectType[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
