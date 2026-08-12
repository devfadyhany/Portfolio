import { useState } from "react";

import NavTab from "./NavTab";

import Projects from "./Projects";
import Contact from "./Contact";
import GraduationProject from "./GraduationProject";

function MultiSection({ active, onChange }) {
  const tabs = {
    projects: <Projects />,
    contact: <Contact />,
    graduationProject: <GraduationProject />,
  };

  return (
    <section id="projects" className="bg-black text-center py-16">
      <div>
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 mb-8">
          My name is Fady, I live in Giza, Imbabah, These are some of my
          projects.
        </p>

        <NavTab active={active} onChange={onChange} />

        <div className="mt-8">{tabs[active]}</div>
      </div>
    </section>
  );
}

export default MultiSection;
