import { useRef } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTiltGlow from "../hooks/useTiltGlow";

gsap.registerPlugin(ScrollTrigger);

const TiltCard = ({ children, style }) => {
  const { cardRef, glowRef, handleMouseMove, handleMouseLeave } = useTiltGlow({
    perspective: 600,
    intensity: 10,
  });

  return (
    <div
      ref={cardRef}
      className="counter-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className="counter-card-glow" />
      {children}
    </div>
  );
};

const AnimateCounter = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".counter-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0.4, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div id="counter" ref={containerRef} className="padding-x-lg mt-20 md:mt-32">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {counterItems.map((item, index) => (
          <TiltCard
            key={item.label}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="counter-number">
              <CountUp
                suffix={item.suffix}
                prefix={item.prefix}
                end={item.value}
                startVal={0}
                decimals={Number.isInteger(item.value) ? 0 : 2}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                duration={2.5}
              />
            </div>
            <div className="text-white-50 text-lg relative z-10">{item.label}</div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export default AnimateCounter;
