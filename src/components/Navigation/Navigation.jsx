import "./navigation.css";
import logo from "../../../public/icons/logo.svg";

const Navigation = () => {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <ul className="nav__list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">FAQ`s</a>
            </li>
          </ul>
          <div className="nav__button-wrapper">
            <a href="#">Contact Us</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
