import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import GradientBackground from "../components/GradientBackground";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const sidebarRef = useRef(null);
  const navRef = useRef(null);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [slug]);

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // GSAP animations
  useGSAP(() => {
    if (!project) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (headerRef.current) {
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      );
    }

    if (galleryRef.current) {
      tl.fromTo(
        galleryRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      );
    }

    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
    }

    if (featuresRef.current) {
      tl.fromTo(
        featuresRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );
    }

    if (sidebarRef.current) {
      tl.fromTo(
        sidebarRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
    }

    if (navRef.current) {
      tl.fromTo(
        navRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.2"
      );
    }
  }, [slug]);

  if (!project) {
    return (
      <>
        <GradientBackground />
        <section className="project-detail-section px-6 py-16 xl:px-24">
          <div className="text-center mt-20">
            <h1 className="text-2xl font-bold text-white mb-4">
              Project Not Found
            </h1>
            <button
              onClick={() => navigate("/projects")}
              className="text-white-50 hover:text-white transition-colors"
            >
              Back to Projects
            </button>
          </div>
        </section>
      </>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const gallery = project.gallery || [project.image];
  const hasMultipleImages = gallery.length > 1;

  const goToPrev = () => {
    setActiveImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <GradientBackground />
      <section className="project-detail-section px-6 py-16 xl:px-24">
        {/* Back button */}
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 text-white-50 hover:text-white transition-colors mb-8 cursor-pointer"
        >
          <FaArrowLeft className="text-sm" />
          <span className="text-sm font-medium">Back to Projects</span>
        </button>

        {/* Header — title + tech pills + quick links */}
        <div ref={headerRef} className="max-w-[900px] mx-auto mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-white-50 text-base md:text-lg leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {project.tech.map((tech, i) => (
              <span key={i} className="project-tech-pill text-xs">
                {tech}
              </span>
            ))}
            <span className="mx-2 text-white/20">|</span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-50 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
            >
              <FaGithub className="text-base" /> Source
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
              >
                <FaExternalLinkAlt className="text-xs" /> Demo
              </a>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="project-gallery">
          <div className="project-gallery-main">
            <img
              src={gallery[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
            />
            {hasMultipleImages && (
              <>
                <button
                  className="gallery-nav-btn prev"
                  onClick={goToPrev}
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
                <button
                  className="gallery-nav-btn next"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  <FaChevronRight className="text-sm" />
                </button>
              </>
            )}
          </div>

          {hasMultipleImages && (
            <div className="gallery-thumbnails">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  className={`gallery-thumbnail ${i === activeImage ? "active" : ""}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} />
                </button>
              ))}
            </div>
          )}

          {hasMultipleImages && (
            <div className="text-center text-white-50 text-xs pb-3">
              {activeImage + 1} / {gallery.length}
            </div>
          )}
        </div>

        {/* Info section — two-column */}
        <div className="project-detail-info max-w-[900px] mx-auto">
          {/* Left column — description + features */}
          <div>
            {/* About */}
            <div ref={descRef}>
              <h2 className="text-xl font-semibold text-white mb-4">About</h2>
              <p className="text-white-50 text-sm md:text-base leading-relaxed mb-8">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div ref={featuresRef}>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Key Features
                </h3>
                <div className="space-y-3 mb-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="bento-bullet" />
                      <p className="text-white-50 text-sm leading-relaxed flex-1">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column — tech stack + CTA buttons */}
          <div ref={sidebarRef}>
            <div className="project-detail-glass-card mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="project-tech-pill text-sm px-3 py-1.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-cta project-detail-cta-primary"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail-cta project-detail-cta-secondary"
                >
                  <FaGithub className="text-base" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Gallery count badge */}
            <div className="project-detail-glass-card">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white-50">Screenshots</span>
                <span className="text-sm font-semibold text-white">
                  {gallery.length} {gallery.length === 1 ? "image" : "images"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Prev/Next navigation */}
        <div ref={navRef} className="project-prev-next max-w-[900px] mx-auto">
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`}>
              <FaArrowLeft className="text-xs" />
              <span className="hidden sm:inline">{prevProject.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`}>
              <span className="hidden sm:inline">{nextProject.title}</span>
              <span className="sm:hidden">Next</span>
              <FaArrowRight className="text-xs" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
