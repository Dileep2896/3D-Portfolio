import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import useTiltGlow from "../hooks/useTiltGlow";

gsap.registerPlugin(ScrollTrigger);

const bentoGridItems = [
  { type: "experience", expIndex: 0, xlSpan: 2, mdSpan: 2 },
  { type: "metric", value: "3×", label: "Feature Velocity" },
  { type: "metric", value: "35%", label: "More Interactive" },
  { type: "experience", expIndex: 1, xlSpan: 2, mdSpan: 2 },
  { type: "metric", value: "$1.5M", label: "Startup Valuation" },
  { type: "experience", expIndex: 2, xlSpan: 2, mdSpan: 2 },
  { type: "experience", expIndex: 3, xlSpan: 2, mdSpan: 1 },
  { type: "metric", value: "60%", label: "Faster Builds" },
];

const BentoExperienceCard = ({ card, xlSpan, mdSpan }) => {
  const spanClass =
    xlSpan === 2
      ? mdSpan === 2
        ? "xl:col-span-2 md:col-span-2"
        : "xl:col-span-2 md:col-span-1"
      : "xl:col-span-1 md:col-span-1";

  const { cardRef, glowRef, handleMouseMove, handleMouseLeave } = useTiltGlow();

  return (
    <div className={`bento-item ${spanClass}`}>
      <div
        ref={cardRef}
        className="bento-exp-card flex flex-col"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={glowRef} className="tilt-glow-overlay" />

        {/* Card Header */}
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <div className="bento-card-logo">
            <img
              src={card.logoPath}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
              {card.title}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-1">
              <span className="text-sm text-white-50 font-medium">
                {card.date}
              </span>
              <span className="text-white-50 text-xs hidden md:inline">•</span>
              <span className="text-sm text-white-50">{card.location}</span>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-2 relative z-10">
          {card.responsibilities.map((responsibility, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="bento-bullet" />
              <p className="text-white-50 text-sm leading-relaxed flex-1">
                {responsibility}
              </p>
            </div>
          ))}
        </div>

        {/* Spacer to push metrics + icons to bottom */}
        <div className="flex-1" />

        {/* Metrics */}
        {card.metrics && (
          <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/10 relative z-10">
            {card.metrics.map((metric, idx) => (
              <div key={idx} className="flex-1 text-center">
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-xs text-white-50">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Icons */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10 relative z-10">
          {card.icons?.map((Icon, idx) => (
            <div key={idx} className="bento-tech-icon">
              <Icon className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MetricAccentCard = ({ value, label }) => {
  const { cardRef, glowRef, handleMouseMove, handleMouseLeave } = useTiltGlow();

  return (
    <div className="bento-item xl:col-span-1 md:col-span-1 hidden md:block">
      <div
        ref={cardRef}
        className="bento-metric-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={glowRef} className="tilt-glow-overlay" />
        <div className="bento-metric-value relative z-10">{value}</div>
        <div className="bento-metric-label relative z-10">{label}</div>
      </div>
    </div>
  );
};

const Experience = () => {
  useGSAP(() => {
    // Stagger all bento items on scroll
    gsap.from(".bento-item", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 85%",
      },
    });

    // Additional pop effect for metric values
    gsap.from(".bento-metric-value", {
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Work Experience" sub="My Career Overview" />

        <div className="bento-grid mt-20">
          {bentoGridItems.map((item, index) => {
            if (item.type === "experience") {
              const card = expCards[item.expIndex];
              return (
                <BentoExperienceCard
                  key={`exp-${item.expIndex}`}
                  card={card}
                  xlSpan={item.xlSpan}
                  mdSpan={item.mdSpan}
                />
              );
            }
            return (
              <MetricAccentCard
                key={`metric-${index}`}
                value={item.value}
                label={item.label}
              />
            );
          })}
        </div>

        {/* Last two experience cards — equal half-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-6xl mx-auto">
          {[4, 5].map((expIndex) => (
            <BentoExperienceCard
              key={`exp-${expIndex}`}
              card={expCards[expIndex]}
              xlSpan={1}
              mdSpan={1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
