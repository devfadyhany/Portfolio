import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Demo from "../../assets/Demo.mp4";

function GraduationProject() {
  const ProjectDetails = {
    name: "Study Smart",
    description:
      "an AI-powered productivity assistant for CS students (Level 1–4), that combines time management, exam generation, project collaboration, and progress tracking — all in one platform.",
    video: Demo,
    github: "https://github.com/devfadyhany/StudySmart",
    tech: [
      "React",
      "Bootstrap",
      "Nest.js",
      "PostgreSQL",
      "FastAPI",
      "Python",
      "Hugging-face",
      "Groq",
    ],
  };

  return (
    <section className="bg-black pb-32">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-cyan-400 text-3xl"
          />
          <h2 className="text-2xl md:text-3xl font-bold uppercase">
            Graduation Project
          </h2>
        </div>

        <div className="relative group overflow-hidden rounded-2xl bg-gray-900/50 border border-white/10">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-3/5 relative group">
              <video
                src={ProjectDetails.video}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 duration-300 pointer-events-none">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-cyan-500"></span>
                </span>
                <span className="text-[10px] text-white font-bold uppercase tracking-widest">
                  Live Demo
                </span>
              </div>
            </div>

            <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-white text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {ProjectDetails.name}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6 text-md">
                {ProjectDetails.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {ProjectDetails.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={ProjectDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20 active:scale-95"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GraduationProject;
