import thumbnail1 from "../assets/project1.png";
import thumbnail2 from "../assets/project2.png";
import thumbnail3 from "../assets/project3.png";
import thumbnail4 from "../assets/project4.png";
import thumbnail5 from "../assets/project5.png";

const projectImages = import.meta.glob(
  "../assets/projects/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const getProjectImages = (projectName) => {
  return Object.entries(projectImages)
    .filter(([path]) => path.includes(`/projects/${projectName}/`))
    .map(([, image]) => image);
};

export const projects = [
  {
    id: 1,
    name: "StepUp",
    shortDescription:
      "A non-responsive shoe store landing page built with pure HTML and CSS.",
    description:
      "A non-responsive shoe store landing page built with pure HTML and CSS. It features a clean and modern design, showcasing various shoe products with their details and prices.",
    thumbnail: thumbnail1,
    images: getProjectImages("stepup"),
    github: "https://github.com/devfadyhany/StepUp",
    live: "https://devfadyhany.github.io/StepUp/",
  },
  {
    id: 2,
    name: "CompuCart",
    shortDescription:
      "A modern, non-responsive computer & electronics store landing page.",
    description:
      "A modern, non-responsive computer & electronics store landing page.",
    thumbnail: thumbnail2,
    images: getProjectImages("compucart"),
    github: "https://github.com/devfadyhany/CompuCart",
    live: "https://devfadyhany.github.io/CompuCart/",
  },
  {
    id: 3,
    name: "Nusr-Et",
    shortDescription:
      "A modern, responsive restaurant landing page for a premium steakhouse.",
    description:
      "A modern, responsive restaurant landing page for a premium steakhouse.",
    thumbnail: thumbnail3,
    images: getProjectImages("nusret"),
    github: "https://github.com/devfadyhany/Nusr-Et",
    live: "https://devfadyhany.github.io/Nusr-Et/",
  },
  {
    id: 4,
    name: "Medicare",
    shortDescription:
      "A simple multi-page, JavaScript-powered medical products e-commerce web app.",
    description:
      "A simple multi-page, JavaScript-powered medical products e-commerce web app.",
    thumbnail: thumbnail4,
    images: getProjectImages("medicare"),
    github: "https://github.com/devfadyhany/Medicare",
    live: "https://devfadyhany.github.io/Medicare/",
  },
  {
    id: 5,
    name: "DigitalPro",
    shortDescription:
      "A single-page, Tailwind CSS template for a marketing agency.",
    description: "A single-page, Tailwind CSS template for a marketing agency.",
    thumbnail: thumbnail5,
    images: getProjectImages("digitalpro"),
    github: "https://github.com/devfadyhany/DigitalPro",
    live: "https://devfadyhany.github.io/DigitalPro/",
  },
];
