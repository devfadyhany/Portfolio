import { NavLink } from "react-router-dom";

const Tab = ({ to, label, roundedClass }) => {
  const baseClass = `relative isolate border border-white/20 text-sm px-6 py-2 md:px-16 md:py-4 group overflow-hidden ${roundedClass}`;

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => `${baseClass} ${isActive ? "active" : ""}`}
      >
        {({ isActive }) => (
          <>
            {/* Active/Hover State: Visible when active OR hovering */}
            <span
              className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-opacity duration-300 -z-10 ${roundedClass} ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            ></span>

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
      <ul className="flex w-fit mx-auto text-center bg-gradient-to-r py-2 md:py-4 from-gray-600/40 to-gray-600/50 rounded-full">
        <Tab to="section1" label="1st Section" roundedClass="rounded-s-full" />
        <Tab to="section2" label="2nd Section" roundedClass="" />
        <Tab to="section3" label="3rd Section" roundedClass="rounded-e-full" />
      </ul>
    </>
  );
}

export default NavTab;
