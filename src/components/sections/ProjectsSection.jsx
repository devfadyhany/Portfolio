import { projects } from "../../constants/projects";

import ProjectCard from "../projects/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-black pb-20">
      <div className="max-w-7xl container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
