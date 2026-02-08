import { useRef } from "react";
import { abilities } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ ability }) => {
  const glowRef = useRef(null);
  const Icon = ability.icon;

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
    <div
      className="feature-card card-border rounded-xl p-8 flex flex-col gap-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className="tilt-glow-overlay" />
      <div className={`flex ${ability.iconColor} relative z-10`}>
        <Icon className="size-7" />
      </div>
      <h3 className="text-2xl font-semibold mt-2 text-white relative z-10">
        {ability.title}
      </h3>
      <p className="text-lg text-white-50 relative z-10">{ability.desc}</p>
    </div>
  );
};

const FeatureCards = () => {
  useGSAP(() => {
    gsap.from(".feature-card", {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".feature-grid",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div className="w-full padding-x-lg">
      <div className="feature-grid mx-auto grid-3-cols">
        {abilities.map((ability, idx) => (
          <FeatureCard key={idx} ability={ability} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
