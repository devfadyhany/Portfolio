import { useParams, useNavigate, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../constants/projects";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-400 mb-8">
            This project doesn't exist, or maybe it was removed.
          </p>
          <Link
            to="/"
            className="relative isolate inline-flex items-center gap-2 justify-center border border-white/10 bg-gray-800/40 rounded-full px-8 py-3 font-semibold overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const gallery = project.images?.length ? project.images : [project.thumbnail];

  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <div className="max-w-5xl container mx-auto">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>

        <div className="rounded-xl overflow-hidden border border-white/10 mb-8 project-gallery">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="aspect-video"
          >
            {gallery.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold">{project.name}</h1>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-semibold px-6 py-3 border border-white group overflow-hidden text-center rounded-full flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition duration-300" />
              <span className="relative z-10 text-white group-hover:text-slate-900 transition duration-300 flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} />
                Code
              </span>
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative isolate flex items-center gap-2 justify-center border border-white/10 bg-gray-800/40 rounded-full px-6 py-3 font-semibold overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              Live Demo
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed mb-16">
          {project.description}
        </p>

        <div className="flex justify-between items-center border-t border-white/10 pt-8">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← {prevProject.name}
            </Link>
          ) : (
            <span />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {nextProject.name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
