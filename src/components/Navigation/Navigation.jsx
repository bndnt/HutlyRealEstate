import "./navigation.css";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
const Navigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [isOpenHeader, setOpenHeader] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  useEffect(() => {
    const backdrop = document.querySelector(".backdrop");
    if (isOpenHeader) {
      document.body.classList.add("hidden");
      if (backdrop) backdrop.classList.add("backdrop-active");
    } else {
      document.body.classList.remove("hidden");
      if (backdrop) backdrop.classList.remove("backdrop-active");
    }
  }, [isOpenHeader]);
  const handleBurgerClick = () => {
    setOpenHeader((prev) => !prev);
  };
  const handleBackdropClose = (e) => {
    if (e.target === e.currentTarget) {
      setOpenHeader(false);
    }
  };
  return (
    <header className="header">
      <div className="container">
        {isMobile && (
          <div className="header__nav-mobile">
            <div className="nav__logo-mob">
              <a href="/">
                <Logo />
              </a>
            </div>
            <button
              className={clsx("header__mobile", { active: isOpenHeader })}
              onClick={handleBurgerClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        )}
        {(!isMobile || isOpenHeader || !isOpenHeader) && (
          <div className="backdrop" onClick={handleBackdropClose}>
            <nav className={clsx("nav", { "nav-active": isOpenHeader })}>
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
              <ThemeToggle />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
