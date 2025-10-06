import "./navigation.css";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <a href="/">
              <Logo />
            </a>
          </div>
          <ul className="nav__list">
            <li>
              <a className="nav__link nav__link-active" href="">
                Home
              </a>
            </li>
            <li>
              <a className="nav__link" href="">
                Project
              </a>
            </li>
            <li>
              <a className="nav__link" href="">
                About Us
              </a>
            </li>
            <li>
              <a className="nav__link" href="">
                FAQ`s
              </a>
            </li>
          </ul>
          <div className="nav__button-wrapper">
            <a className="nav__button-link" href="#">
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
