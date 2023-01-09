import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="navbar" id="navbar" />
        <div className="hamburger-lines">
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </div>
        <ul className="menu-items">
          <li>
            <a data-section=".home" href="#Home">
              Home
            </a>
          </li>
          <li>
            <a data-section=".About-me" href="#About_me">
              About me
            </a>
          </li>
          <li>
            <a data-section=".services" href="#Services">
              Services
            </a>
          </li>
          <li>
            <a data-section=".TechStack" href="#TechStack">
              Tech Stack
            </a>
          </li>
          <li>
            <a data-section=".contact" href="./assets/pages/contact.html">
              Contact
            </a>
          </li>
        </ul>
        <h1 className="logo">
          <a href="#Home">TaHa</a>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
