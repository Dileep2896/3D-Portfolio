import { useRef } from "react";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const headingRef = useRef(null);

  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.05 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=10",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-16 xl:px-24">
      <h1 ref={headingRef} className="text-3xl font-bold mb-10 text-white-50">
        MY PROJECTS
      </h1>

      <div className="project-list-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} ref={addToRefs} className="project overflow-hidden">
            <div className={`image-wrapper ${project.bg} p-4 rounded-lg`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-67 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-white">
              {project.title}
            </h2>
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="bg-white/10 text-white text-xs px-3 py-1 rounded-md"
                >
                  {techItem}
                </span>
              ))}
            </div>

            {/* GitHub + Live Demo Links */}
            <div className="flex gap-4 mt-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 hover:text-white text-sm flex items-center gap-1"
              >
                <FaGithub className="text-base" />
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50 hover:text-white text-sm flex items-center gap-1"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
