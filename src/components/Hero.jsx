import { useEffect, useState } from "react";
import profileImage from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function Hero({ setActiveTab }) {
  const words = ["Software Engineer", "Full-Stack Developer"];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const getTypingSpeed = () => {
    if (isDeleting) {
      return 50;
    }

    const i = loopNum % words.length;

    if (!isDeleting && text === words[i]) {
      return 1500;
    }

    return 150;
  };

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      } else {
        setText(fullText.substring(0, text.length + 1));

        if (text === fullText) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleType, getTypingSpeed());
    return () => {
      clearTimeout(timer);
    };
  }, [text, isDeleting, loopNum]);

  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black text-white pb-8 lg:pb-32 lg:pt-4">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="relative min-h-[70vh] lg:min-h-[700px] w-full mx-auto flex flex-col justify-center lg:flex-row lg:items-center lg:gap-12 py-20">
          {/* /////////////////////// Text /////////////////////// */}
          <div className="flex flex-col gap-6 w-full text-center lg:text-left ">
            <div className="w-fit px-4 py-2 rounded-lg border border-white/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm md:text-md font-semibold mx-auto lg:mx-0">
              Welcome To My Portfolio
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
              Hi! I'm Fady Hany, <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
                {text}
                <span className="text-white animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-gray-400 text-md lg:text-xl lg:border-l-2 border-blue-500 pl-4">
              Hello everyone I have 8 months of Experience in web development.
            </p>

            <a
              href="#contact"
              onClick={() => setActiveTab("contact")}
              className="mt-4 lg:mt-8 mx-auto lg:mx-0 text-xl font-semibold flex items-center gap-2 hover:text-blue-400 transition"
            >
              <span>Let's Connect</span>
              <FontAwesomeIcon
                className="text-2xl"
                icon={faArrowAltCircleRight}
              />
            </a>
          </div>

          {/* /////////////////////// Image /////////////////////// */}
          <div className="hidden lg:flex justify-end lg:justify-end">
            <div className="relative group me-12">
              {/* Decorative background glow */}
              <img
                src={profileImage}
                alt="Profile"
                className="w-96 xl:w-[30rem] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-float rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
