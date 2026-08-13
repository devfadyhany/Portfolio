import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const goToDetails = () => navigate(`/projects/${project.id}`);

  return (
    <div
      key={project.id}
      onClick={goToDetails}
      className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg max-w-[400px] cursor-pointer"
    >
      <img
        src={project.thumbnail}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center translate-y-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        <h3 className="text-white text-xl font-bold">{project.name}</h3>

        <p className="text-gray-300 text-center px-4 mb-4">
          {project.shortDescription}
        </p>

        <div className="flex gap-6">
          <a
            href={project.github}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="text-white hover:text-blue-400 transition-colors text-2xl"
            aria-label="GitHub Repository"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={project.live}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="text-white hover:text-blue-400 transition-colors text-2xl"
            aria-label="Live Demo"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
