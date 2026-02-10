import { FaFileDownload, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const coursework = [
  "Machine Learning",
  "Computer Vision",
  "Artificial Intelligence",
  "Algorithms",
  "Cryptography",
  "Big Data Analytics",
];

const AboutSection = () => {
  useGSAP(() => {
    gsap.from(".about-bio", {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    gsap.from(".about-edu", {
      opacity: 0,
      x: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    gsap.from(".about-coursework-tag", {
      opacity: 0,
      y: 10,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".about-edu",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="about" className="px-5 md:px-10 mt-10 md:mt-16">
      <div className="w-full md:px-10 px-5">
        <TitleHeader title="About Me" sub="Get to know me" />

        <div className="about-grid mt-16">
          {/* Left — Bio */}
          <div className="about-bio flex flex-col gap-6">
            <p className="text-white-50 text-base md:text-lg leading-relaxed">
              Hey! I'm Dileep. I've been writing code for about 7 years now,
              mostly building web and mobile apps with React, Flutter, and
              Node.js. A couple years ago I co-founded an EV charging startup
              that hit a $1.5M valuation, which taught me more about shipping
              real products than any class ever could.
            </p>
            <p className="text-white-50 text-base md:text-lg leading-relaxed">
              Right now I'm finishing up my Master's in CS at RIT while working
              as a Software Engineer Co-Op at Metis AI. I love figuring out how
              to make things work well, whether that's a drag-and-drop scheduling
              system or an offline-first mobile app for field technicians.
              Hackathons are my thing too, 12 wins and counting.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://s3-personal-bucket.s3.amazonaws.com/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-action-btn"
              >
                <FaFileDownload className="text-sm" />
                <span>Download Resume</span>
              </a>
              <a
                href="mailto:dkus2896@gmail.com"
                className="about-action-btn"
              >
                <FaEnvelope className="text-sm" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Right — Education Card */}
          <div className="about-edu glass-card p-6 md:p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="about-edu-icon">
                <FaGraduationCap className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Rochester Institute of Technology
                </h3>
                <p className="text-white-50 text-sm">
                  Master of Science in Computer Science
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <p className="text-white-50 text-sm">
                Expected Spring 2026 &middot; GPA: 3.4 / 4.0
              </p>
            </div>

            <div>
              <p className="text-white-50 text-xs uppercase tracking-wider mb-3">
                Key Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span key={course} className="about-coursework-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
