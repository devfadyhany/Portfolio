import { useState } from "react";

import NavTab from "./NavTab";

import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import GraduationProject from "../sections/GraduationProject";

function MultiSection({ active, onChange }) {
  const tabs = {
    projects: {
      id: "projects",
      title: "Projects",
      description:
        "My name is Fady, I live in Giza, Imbabah, These are some of my projects.",
      content: <ProjectsSection />,
    },
    contact: {
      id: "contact",
      title: "Contact",
      description:
        "Feel free to contact me if you have an idea you want to bring alive.",
      content: <ContactSection />,
    },
    graduationProject: {
      id: "gp",
      title: "",
      description: "",
      content: <GraduationProject />,
    },
  };

  return (
    <section id={tabs[active]?.id} className="bg-black text-center pt-8">
      <div>
        <h2 className="text-4xl font-bold mb-4">{tabs[active]?.title}</h2>
        <p className="text-gray-400 mb-8">{tabs[active]?.description}</p>

        <NavTab active={active} onChange={onChange} />

        <div className="mt-8">{tabs[active]?.content}</div>
      </div>
    </section>
  );
}

export default MultiSection;
