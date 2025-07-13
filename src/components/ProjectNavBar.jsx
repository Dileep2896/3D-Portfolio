import { useEffect, useState } from "react";

const ProjectNavBar = () => {
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
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Dileep Sharma
        </a>
      </div>
    </header>
  );
};

export default ProjectNavBar;
