import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, skillCategories } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import useTiltGlow from "../hooks/useTiltGlow";

gsap.registerPlugin(ScrollTrigger);

const TechCard = ({ icon }) => {
  const { cardRef, glowRef, handleMouseMove, handleMouseLeave } = useTiltGlow({
    intensity: 6,
  });

  return (
    <div className="tech-card-wrapper">
      <div
        ref={cardRef}
        className="md:card-border tech-card-tilt overflow-hidden rounded-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={glowRef} className="tilt-glow-overlay" />
        <div className="tech-card-content">
          <div className="tech-icon-wrapper">
            <TechIcon model={icon} />
          </div>
        </div>
      </div>
      <p className="tech-card-label">{icon.name}</p>
    </div>
  );
};

const TechStack = () => {
  useGSAP(() => {
    gsap.from(".skill-card-anim", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".skill-card-anim",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div id="skills" className="flex-center px-5 md:px-10 mt-10 md:mt-40 relative z-1">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Tech Stack"
          sub="What I bring to the table"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <TechCard key={icon.name} icon={icon} />
          ))}
        </div>

        {/* ATS-friendly text skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 md:mt-20">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="glass-card p-4 skill-card-anim"
            >
              <h4 className="text-white font-semibold text-sm mb-3">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="project-tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
