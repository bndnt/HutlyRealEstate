import { createPortal } from "react-dom";
import "./themeToggle.css";
import { useRef } from "react";

const ThemeToggle = () => {
  const lightRef = useRef(null);
  const mediumRef = useRef(null);
  const darkRef = useRef(null);

  const clickHandler = (element) => {
    console.log(element);
    lightRef.current.classList.remove("active");
    mediumRef.current.classList.remove("active");
    darkRef.current.classList.remove("active");

    element.classList.add("active");
    document.body.setAttribute("data-theme", element.dataset.theme);
  };
  return createPortal(
    <div className="theme-toggle">
      <button
        className="theme-toggle___btn"
        ref={lightRef}
        onClick={(e) => clickHandler(e.currentTarget)}
        data-theme="light"
      >
        <span>🌝</span>
      </button>
      <button
        className="theme-toggle___btn"
        ref={mediumRef}
        onClick={(e) => clickHandler(e.currentTarget)}
        data-theme="medium"
      >
        <span>🌗</span>
      </button>
      <button
        className="theme-toggle___btn"
        ref={darkRef}
        onClick={(e) => clickHandler(e.currentTarget)}
        data-theme="dark"
      >
        <span>🌚</span>
      </button>
    </div>,
    document.getElementById("theme-root")
  );
};

export default ThemeToggle;
