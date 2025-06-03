import { useEffect, useState, useRef } from "react";

import { NavSVG } from "../../SVG/svg";

import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const [visibleNav, setVisibleNav] = useState(
    window.outerWidth > 800 ? true : false
  );

  useEffect(() => {
    function handleResize() {
      if (window.outerWidth > 800) {
        setVisibleNav((preState) => true);
      } else {
        setVisibleNav((preState) => false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickToggleVisible = () => {
    setVisibleNav((preState) => !preState);
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.navButtonContainer}>
        <input type="checkbox" id="openNav" className={styles.checkBoxNav} />
        <label className={styles.navButton} htmlFor="openNav">
          <div className={styles.navButtonLogo}>{<NavSVG />}</div>
        </label>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#home">
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#about">
              <p>About Me</p>
            </a>
          </li>
          <li>
            <a href="#expertise">
              <p>My Expertise</p>
            </a>
          </li>
          <li>
            <a href="#work">
              <p>My Work</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
