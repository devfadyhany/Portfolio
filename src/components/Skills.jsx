import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SKILLS_DATA = [
  { name: "React", percentage: 90 },
  { name: "Node.js", percentage: 75 },
  { name: "Tailwind", percentage: 95 },
  { name: "MongoDB", percentage: 70 },
  { name: "JavaScript", percentage: 85 },
];

function SkillCircle({ name, percentage }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="progress-circle shadow-lg"
        style={{ "--percentage": percentage }}
      >
        <span className="progress-text text-2xl font-bold text-white">
          {percentage}%
        </span>
      </div>
      <span className="text-lg font-medium text-gray-300">{name}</span>
    </div>
  );
}

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = SKILLS_DATA.length - visibleItems;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="skills" className="text-center pb-20">
      <div className="relative container mx-auto px-4">
        <div className="bg-[#151515] rounded-xl py-16 px-8 -mt-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400 mb-12">You Can See My Skills Here</p>

          <div className="relative flex items-center justify-center max-w-[600px] mx-auto group">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 md:left-[-40px] mb-8 z-10 p-3 md:p-4 bg-black/60 hover:bg-blue-600 text-white rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>

            {/* Carousel Window */}
            <div className="overflow-hidden w-full max-w-5xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                }}
              >
                {SKILLS_DATA.map((skill, index) => (
                  <div
                    key={index}
                    className="min-w-[100%] md:min-w-[33.33%] flex justify-center px-4"
                  >
                    <SkillCircle
                      name={skill.name}
                      percentage={skill.percentage}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 md:right-[-40px] mb-8 z-10 p-3 md:p-4 bg-black/60 hover:bg-blue-600 text-white rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
