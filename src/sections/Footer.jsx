import { socialIcons } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Dream big, code bigger.</p>
        </div>
        <div className="socials">
          {socialIcons.map(({ name, Icon, link }) => (
            <a key={name} href={link} target="_blank" rel="noopener noreferrer">
              <Icon className="text-2xl text-gray-500 hover:text-white transition-colors" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Dileep Kumar Sharma. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
