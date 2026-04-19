import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

function ProjectCard({ project }) {
  return (
    <div
      key={project.id}
      className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg max-w-[400px]"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/70 to-blue-600/70 flex flex-col items-center justify-center translate-y-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        <h3 className="text-white text-xl font-bold">{project.name}</h3>

        <p className="text-gray-300 text-center px-4 mb-4">
          {project.description}
        </p>

        <div className="flex gap-6">
          <a
            href={project.github}
            target="_blank"
            className="text-white hover:text-blue-400 transition-colors text-2xl"
            aria-label="GitHub Repository"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={project.live}
            target="_blank"
            className="text-white hover:text-blue-400 transition-colors text-2xl"
            aria-label="Live Demo"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      name: "StepUp",
      description:
        "A non-responsive shoe store landing page built with pure HTML and CSS.",
      image: project1,
      github: "https://github.com/devfadyhany/StepUp",
      live: "https://devfadyhany.github.io/StepUp/",
    },
    {
      id: 2,
      name: "CompuCart",
      description:
        "A modern, non-responsive computer & electronics store landing page.",
      image: project2,
      github: "https://github.com/devfadyhany/CompuCart",
      live: "https://devfadyhany.github.io/CompuCart/",
    },
    {
      id: 3,
      name: "Nusr-Et",
      description:
        "A modern, responsive restaurant landing page for a premium steakhouse.",
      image: project3,
      github: "https://github.com/devfadyhany/Nusr-Et",
      live: "https://devfadyhany.github.io/Nusr-Et/",
    },
    {
      id: 4,
      name: "Medicare",
      description:
        "A simple multi-page, JavaScript-powered medical products e-commerce web app.",
      image: project4,
      github: "https://github.com/devfadyhany/Medicare",
      live: "https://devfadyhany.github.io/Medicare/",
    },
    {
      id: 5,
      name: "DigitalPro",
      description:
        "A single-page, Tailwind CSS template for a marketing agency.",
      image: project5,
      github: "https://github.com/devfadyhany/DigitalPro",
      live: "https://devfadyhany.github.io/DigitalPro/",
    },
  ];

  return (
    <section className="bg-black pb-20">
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
