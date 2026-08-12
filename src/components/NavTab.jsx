import { tabs } from "../constants/navigations";

const Tab = ({ id, label, shortLabel, active, onClick, roundedClass }) => {
  const isActive = active === id;
  const baseClass = `relative isolate flex items-center justify-center w-full h-full border border-white/10 text-md font-semibold px-6 py-3 md:px-12 group overflow-hidden ${roundedClass}`;

  return (
    <li className="flex-1 flex">
      <button
        onClick={() => onClick(id)}
        className={`${baseClass} ${isActive ? "active" : ""}`}
      >
        <span
          className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-opacity duration-300 -z-10 ${roundedClass} ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        />
        <span className="sm:hidden">{shortLabel || label}</span>
        <span className="hidden sm:inline">{label}</span>
      </button>
    </li>
  );
};

function NavTab({ active, onChange }) {
  return (
    <nav className="w-full max-w-4xl mx-auto px-4">
      <ul className="flex w-full mx-auto text-center bg-gray-800/40 rounded-full overflow-hidden border border-white/10">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            {...tab}
            active={active}
            onClick={onChange}
            roundedClass={
              index === 0
                ? "rounded-s-full"
                : index === tabs.length - 1
                  ? "rounded-e-full"
                  : ""
            }
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavTab;
