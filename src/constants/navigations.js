import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects", tabId: "projects" },
];

export const socialLinks = [
  { icon: faLinkedinIn, href: "https://linkedin.com/in/dev-fady-hany" },
  { icon: faFacebookF, href: "https://facebook.com/fady.hany.528316" },
  { icon: faInstagram, href: "https://instagram.com/xxfadyhanyxx" },
  { icon: faGithub, href: "https://github.com/devfadyhany/" },
];

export const tabs = [
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "graduationProject", label: "Graduation Project", shortLabel: "GP" },
];
