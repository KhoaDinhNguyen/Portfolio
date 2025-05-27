import AboutMe from "./AboutMe/AboutMe";

import styles from "./DetailedPages.module.css";

function DetailPages() {
  return (
    <div className={styles.rootContainer}>
      <div id="about">
        <AboutMe />
      </div>
    </div>
  );
}

export default DetailPages;
