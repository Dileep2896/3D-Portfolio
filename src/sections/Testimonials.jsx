import { FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import useTiltGlow from "../hooks/useTiltGlow";

gsap.registerPlugin(ScrollTrigger);

const TestimonialCard = ({ testimonial }) => {
  const { cardRef, glowRef, handleMouseMove, handleMouseLeave } = useTiltGlow({
    intensity: 5,
  });

  return (
    <div
      ref={cardRef}
      className="testimonial-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className="tilt-glow-overlay" />
      <div className="relative z-10">
        <FaQuoteLeft className="text-white/10 text-3xl mb-4" />
        <p className="text-white-50 text-sm md:text-base leading-relaxed mb-6">
          {testimonial.text}
        </p>
        <div>
          <p className="text-white font-semibold text-sm">
            {testimonial.name}
          </p>
          <p className="text-white-50 text-xs mt-1">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  useGSAP(() => {
    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="testimonials" className="section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader title="Testimonials" sub="What people say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
