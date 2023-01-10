import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="Footer">
      <p className="footer-title">
        Copyrights @ <span>Taha Hammouz</span>
      </p>
      <div className="social-icons">
        <a
          aria-label="Dark Grey"
          href="https://github.com/TahaHammouz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../assets/images/Git.png")} alt="Git" />
        </a>
        <a
          aria-label="Dark Grey"
          href="https://www.linkedin.com/in/taha-hammouz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/images/Linkedin.png")}
            alt="Linkedin"
          />
        </a>
        <a
          aria-label="Dark Grey"
          href="https://www.instagram.com/taha_hammouz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/images/Instagram.png")}
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
