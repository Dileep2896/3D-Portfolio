import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
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
              <img src="/images/projects/polychat.png" alt="polychat" />
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://github.com/Dileep2896/PolyChat"
                  target="_blank"
                >
                  PolyChat — Language Learning Social Platform
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                PolyChat is built with the MERN stack, featuring real-time chat,
                interactive feeds, and a modern UI using Tailwind CSS and
                Socket.io.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#b8bfdd]">
                <img src="/images/projects/interviewer.png" alt="" />
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

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#bed5f0]">
                <img src="/images/projects/gooddeeds.png" alt="gooddeeds" />
              </div>
              <h2>
                <a
                  href="https://github.com/Dileep2896/Hackathon"
                  target="_blank"
                >
                  Good Deeds - Community-focused service marketplace
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
