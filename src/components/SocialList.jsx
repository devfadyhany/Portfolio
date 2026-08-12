import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../constants/navigations";

function SocialItem({ href, icon }) {
  return (
    <li>
      <a
        href={href}
        className="relative flex justify-center items-center group"
        target="_blank"
      >
        <div className="relative size-10 rounded-full border border-white flex justify-center items-center overflow-hidden">
          <span className="absolute inset-0 bg-white scale-0 rounded-full group-hover:scale-100 transition duration-300" />

          <FontAwesomeIcon
            icon={icon}
            className="text-sm relative z-10 group-hover:text-slate-900 transition duration-300"
          />
        </div>
      </a>
    </li>
  );
}

function SocialList() {
  return (
    <ul className="flex items-center gap-4">
      {socialLinks.map((social, index) => (
        <SocialItem key={index} href={social.href} icon={social.icon} />
      ))}
    </ul>
  );
}

export default SocialList;
