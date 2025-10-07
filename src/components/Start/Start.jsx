import LogoFooter from "../../../public/icons/logo-bg.svg";
import "./start.css";

const Start = () => {
  return (
    <div className="start">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__flex">
            <div className="start__info">
              <h2 className="start__title">Start Your Project Now!</h2>
              <p className="start__text">
                Made for you convenience for a more beautiful future for you and
                your family
              </p>
            </div>
            <div className="start__btn">
              <a className="start__btn-link" href="#">
                Contact Us
              </a>
            </div>
          </div>
          <footer className="footer">
            <div className="footer__logo-wrapper">
              <a href="/">
                <img src={LogoFooter} alt="logo" />
              </a>
            </div>
            <nav className="footer__nav">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="">About Us</a>
                </li>
                <li className="footer__item">
                  <a href="">Management</a>
                </li>
                <li className="footer__item">
                  <a href="">Project</a>
                </li>
                <li className="footer__item">
                  <a href="">FAQ`s</a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Start;
