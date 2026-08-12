import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl container mx-auto text-center">
        <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 -mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist, or maybe it moved. Let's
          get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="relative isolate flex items-center gap-2 justify-center border border-white/10 bg-gray-800/40 rounded-full px-8 py-3 font-semibold overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <FontAwesomeIcon icon={faHouse} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="relative font-semibold px-8 py-3 border border-white group overflow-hidden text-center rounded-full flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition duration-300" />
            <span className="relative z-10 text-white group-hover:text-slate-900 transition duration-300 flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowLeft} />
              Go Back
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
