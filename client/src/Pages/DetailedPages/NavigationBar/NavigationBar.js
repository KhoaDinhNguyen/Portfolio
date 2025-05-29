import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div>
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
