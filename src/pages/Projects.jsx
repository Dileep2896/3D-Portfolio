import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";
import GradientBackground from "../components/GradientBackground";


gsap.registerPlugin(ScrollTrigger);

// Layout order: interleave projects with accent cards to fill gaps
const gridItems = [
  // Row 1: two large cards
  { type: "project", slug: "polychat" },
  { type: "project", slug: "soocily" },
  // Row 2: three medium + one accent
  { type: "project", slug: "interviewer" },
  { type: "project", slug: "good-deeds" },
  { type: "project", slug: "spotify-clone" },
  { type: "accent", value: "50+", label: "Projects Built", Icon: FaRocket, gradient: "from-cyan-500/20 to-blue-600/20" },
  // Row 3: one large (span 2) + one medium + one accent
  { type: "project", slug: "tasknexus" },
  { type: "project", slug: "documate" },
  { type: "accent", value: "{ }", label: "Clean Code Enthusiast", Icon: FaCode, gradient: "from-violet-500/20 to-purple-600/20" },
  // Row 4: three medium + one accent
  { type: "project", slug: "gadgetbay" },
  { type: "project", slug: "split" },
  { type: "project", slug: "talkbot" },
  { type: "accent", value: "12x", label: "Hackathon Winner", Icon: FaTrophy, gradient: "from-amber-500/20 to-orange-600/20" },
  // Row 5: four small
  { type: "project", slug: "timer-game" },
  { type: "project", slug: "gymgrit" },
  { type: "project", slug: "flutter-chat-app" },
  { type: "project", slug: "nasa-apod" },
];

const ProjectBentoCard = ({ project, onClick }) => {
  const glowRef = useRef(null);
  const isLarge = project.gridSize === "large";
  const isSmall = project.gridSize === "small";

  const imgHeightClass = isLarge
    ? "project-img-large"
    : isSmall
      ? "project-img-small"
      : "project-img-medium";

  const maxTechPills = isSmall ? 3 : undefined;
  const techToShow = maxTechPills
    ? project.tech.slice(0, maxTechPills)
    : project.tech;
  const extraCount = maxTechPills
    ? project.tech.length - maxTechPills
    : 0;

  const handleCardClick = () => {
    onClick(project.slug);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    if (!glow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    glow.style.opacity = "1";
    glow.style.background = `radial-gradient(circle at ${px}px ${py}px, rgba(255,255,255,0.05) 0%, transparent 60%)`;
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
  };

  const handleMouseLeave = (e) => {
    const glow = glowRef.current;
    if (!glow) return;
    glow.style.opacity = "0";
    e.currentTarget.style.borderColor = "";
  };

  return (
    <div className={isLarge ? "project-bento-large" : ""}>
      <div
        className="project-bento-card h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <div ref={glowRef} className="tilt-glow-overlay" />

        {/* Image */}
        <div className={`project-card-image ${imgHeightClass}`}>
          <img src={project.image} alt={project.title} />
        </div>

        {/* Content */}
        <div className="relative z-10 p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-white leading-tight mb-2">
            {project.title}
          </h3>

          {isLarge && (
            <p className="text-white-50 text-sm leading-relaxed mb-3 line-clamp-1">
              {project.description}
            </p>
          )}

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {techToShow.map((tech, i) => (
              <span key={i} className="project-tech-pill">
                {tech}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="project-tech-pill">+{extraCount}</span>
            )}
          </div>

          {/* Links */}
          <div className="project-card-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              onClick={handleLinkClick}
            >
              <FaGithub className="text-sm" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
                onClick={handleLinkClick}
              >
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccentCard = ({ value, label, Icon, gradient }) => {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    if (!glow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    glow.style.opacity = "1";
    glow.style.background = `radial-gradient(circle at ${px}px ${py}px, rgba(255,255,255,0.05) 0%, transparent 60%)`;
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
  };

  const handleMouseLeave = (e) => {
    const glow = glowRef.current;
    if (!glow) return;
    glow.style.opacity = "0";
    e.currentTarget.style.borderColor = "";
  };

  return (
    <div className="hidden xl:block">
      <div
        className="project-accent-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={glowRef} className="tilt-glow-overlay" />
        <div className={`project-accent-bg bg-gradient-to-br ${gradient}`} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full gap-3">
          <Icon className="text-3xl text-white/30" />
          <div className="project-accent-value">{value}</div>
          <div className="text-sm text-white-50 font-medium">{label}</div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  // Build a slug->project lookup
  const projectMap = {};
  for (const p of projects) {
    projectMap[p.slug] = p;
  }

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );

    gsap.from(".project-bento-card, .project-accent-card", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".project-bento-grid",
        start: "top 85%",
      },
    });

    gsap.from(".project-accent-value", {
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".project-bento-grid",
        start: "top 85%",
      },
    });
  }, []);

  const handleCardClick = (slug) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <>
      <GradientBackground />
      <section ref={sectionRef} className="px-6 py-16 xl:px-24 relative z-1">
        <div ref={headingRef} className="flex items-center gap-4 mb-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <FaArrowLeft className="text-white-50 text-sm" />
          </button>
          <h1 className="text-3xl font-bold text-white-50">MY PROJECTS</h1>
        </div>

        <div className="project-bento-grid">
          {gridItems.map((item, index) => {
            if (item.type === "accent") {
              return (
                <AccentCard
                  key={`accent-${index}`}
                  value={item.value}
                  label={item.label}
                  Icon={item.Icon}
                  gradient={item.gradient}
                />
              );
            }
            const project = projectMap[item.slug];
            if (!project) return null;
            return (
              <ProjectBentoCard
                key={project.slug}
                project={project}
                onClick={handleCardClick}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
