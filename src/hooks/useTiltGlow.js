import { useRef, useCallback } from "react";

const useTiltGlow = ({ perspective = 800, intensity = 8 } = {}) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current;
      const glow = glowRef.current;
      if (!card || !glow) return;

      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;

      card.style.transform = `perspective(${perspective}px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg)`;
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(circle at ${px}px ${py}px, rgba(255,255,255,0.05) 0%, transparent 60%)`;
      card.style.borderColor = "rgba(255,255,255,0.12)";
    },
    [perspective, intensity]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    card.style.transform = `perspective(${perspective}px) rotateY(0deg) rotateX(0deg)`;
    glow.style.opacity = "0";
    card.style.borderColor = "";
  }, [perspective]);

  return { cardRef, glowRef, handleMouseMove, handleMouseLeave };
};

export default useTiltGlow;
