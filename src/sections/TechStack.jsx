import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, skillCategories } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import useTiltGlow from "../hooks/useTiltGlow";

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
              className="rounded-xl p-4"
              style={{
                background: "rgba(15, 15, 20, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
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
