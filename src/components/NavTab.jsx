import { NavLink } from "react-router-dom";

const Tab = ({ to, label, roundedClass }) => {
  const baseClass = `relative isolate flex items-center justify-center w-full h-full border border-white/10 text-md font-semibold px-6 py-3 md:px-12 group overflow-hidden ${roundedClass}`;

  return (
    <li className="flex-1 flex">
      <NavLink
        to={to}
        className={({ isActive }) => `${baseClass} ${isActive ? "active" : ""}`}
      >
        {({ isActive }) => (
          <>
            <span
              className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-opacity duration-300 -z-10 ${roundedClass} ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            />

            {label}
          </>
        )}
      </NavLink>
    </li>
  );
};

function NavTab() {
  return (
    <>
      <nav className="w-full max-w-4xl mx-auto px-4">
        <ul className="flex w-full mx-auto text-center bg-gray-800/40 rounded-full overflow-hidden border border-white/10">
          <Tab to="section1" label="Projects" roundedClass="rounded-s-full" />
          <Tab to="section2" label="Contact" roundedClass="" />
          <Tab
            to="section3"
            label="Graduation Project"
            roundedClass="rounded-e-full"
          />
        </ul>
      </nav>
    </>
  );
}

export default NavTab;
