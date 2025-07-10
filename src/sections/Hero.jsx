import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gasp from "gsap";
import AnimateCounter from "../components/AnimateCounter";

const Hero = () => {
  useGSAP(() => {
    gasp.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div> */}
      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Building
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <span>{word}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>That Feel Seamless</h1>
              <h1>And Scale Without Breaking</h1>
            </div>
            <p className="text-white-50 md:text-md relative z-10 pointer-events-none max-w-3xl">
              Hi, I'm Dileep. A full-stack and mobile engineer with experience
              in production-ready systems and scalable architecture. I'm
              currently exploring new grad SDE opportunities for 2026.
            </p>
            <Button
              className="md:w-100 md:h-16 w-90 h-12"
              id="button"
              text="Code that tells my story"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimateCounter />
    </section>
  );
};

export default Hero;
