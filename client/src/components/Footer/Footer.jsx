import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__span">Created by Gaby Sanchez</span>
      <div className="footer__links">
        <a href="https://www.linkedin.com/in/gabriel-sanchez-0591a723a/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/gszcode">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
