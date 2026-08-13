import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import SocialList from "../ui/SocialList";
import { navLinks } from "../../constants/navigations";

function NavItem({ name, href, active, onClick }) {
  return (
    <li key={name}>
      <a
        href={href}
        onClick={onClick}
        className={`font-semibold transition ${active ? "text-white" : "text-white/80 hover:text-white"}`}
      >
        {name}
      </a>
    </li>
  );
}

function NavList({
  mobile = false,
  activeItem,
  setActiveItem,
  setIsOpen,
  activeTab,
  setActiveTab,
}) {
  return (
    <ul className={`flex gap-6 ${mobile ? "flex-col" : "items-center"}`}>
      {navLinks.map((link) => (
        <NavItem
          key={link.name}
          name={link.name}
          href={link.href}
          active={activeItem === link.name}
          onClick={() => {
            if (mobile) setIsOpen(false);
            setActiveItem(link.name);
            if (link.tabId) setActiveTab(link.tabId);
          }}
        />
      ))}
    </ul>
  );
}

function LetsConnectButton({ setActiveTab }) {
  return (
    <a
      href="#contact"
      onClick={() => setActiveTab("contact")}
      className="relative font-semibold px-5 py-2 border border-white group overflow-hidden text-center"
    >
      <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition duration-300" />

      <span className="relative z-10 text-white group-hover:text-slate-900 transition duration-300">
        Let's Connect
      </span>
    </a>
  );
}

function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full py-4 text-white transition fixed top-0 z-50 border-white/10 ${scrolled ? "bg-black/40 backdrop-blur-md border-b" : "bg-transparent"}`}
    >
      <div className="max-w-7xl container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <img src="/favicon.svg" alt="Logo" className="h-8 w-auto" />
            <span className="hidden lg:block font-bold text-3xl">
              Portfolio
            </span>
          </div>

          {/* ////////////////////// Desktop ////////////////////// */}
          <div className="hidden md:flex items-center gap-6">
            <NavList
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              setIsOpen={setIsOpen}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <SocialList />
            <LetsConnectButton setActiveTab={setActiveTab} />
          </div>

          <button
            className="md:hidden text-2xl text-white/80 hover:text-white transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className={`transition duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
            />
          </button>
        </div>

        {/* ////////////////////// Mobile ////////////////////// */}
        {isOpen && (
          <div className="md:hidden absolute top-[100%] left-0 w-full p-6 flex flex-col gap-6 border-t border-slate-800 transition bg-black/80 backdrop-blur-md border-b border-white/10">
            <NavList
              mobile={true}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              setIsOpen={setIsOpen}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <hr className="border-slate-800" />

            <SocialList />
            <LetsConnectButton setActiveTab={setActiveTab} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
