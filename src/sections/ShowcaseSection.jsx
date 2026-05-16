import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import { FaEye, FaFolderOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/projects/reveria.jpg" alt="reveria" loading="lazy" />
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://github.com/Dileep2896/reveria"
                  target="_blank"
                >
                  Reveria — Voice-Driven AI Storybook Generator
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                A real-time AI storybook platform where you co-direct
                illustrated stories with a Gemini Live voice agent. Built on
                Gemini 2.x native interleaved text+image generation, with a
                Google ADK agent pipeline streaming each scene's narration,
                art, and audio in parallel over WebSockets.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper">
                <img src="/images/projects/polychat.webp" alt="polychat" loading="lazy" />
              </div>
              <h2>
                <a
                  href="https://github.com/Dileep2896/PolyChat"
                  target="_blank"
                >
                  PolyChat — Language Learning Social Platform
                </a>
              </h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper showcase-card-dark">
                <img src="/images/projects/interviewer.webp" alt="" loading="lazy" />
              </div>
              <h2>
                <a
                  href="https://github.com/Dileep2896/interviewer"
                  target="_blank"
                >
                  Interviewer - Level Up Your Interview with Real-Time Practice
                </a>
              </h2>
            </div>
          </div>
        </div>
        <Button
          text={"Check out more"}
          btnMargin={"mt-5 xl:mt-0"}
          onclick={() => navigate("/projects")}
          children={
            <span className="icon-prefix">
              <FaFolderOpen className="icon-one" />
              <FaEye className="icon-two" />
            </span>
          }
        />
      </div>
    </section>
  );
};

export default ShowcaseSection;
