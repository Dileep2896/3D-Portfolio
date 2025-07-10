import { FaCode, FaArrowDown } from "react-icons/fa";

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerWidth * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: top,
            behavior: "smooth",
          });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <span className="icon-prefix">
          <FaCode className="icon-code" />
          <FaArrowDown className="icon-arrow" />
        </span>
        <p className="text">{text}</p>
      </div>
    </a>
  );
};

export default Button;
