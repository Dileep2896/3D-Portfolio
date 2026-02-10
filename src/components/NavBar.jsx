import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Dileep Sharma
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://s3-personal-bucket.s3.amazonaws.com/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn hidden lg:flex"
          >
            <FaFileDownload className="text-sm" />
            <span>Resume</span>
          </a>
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact Me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
