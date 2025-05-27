import AboutMe from "./AboutMe/AboutMe";
import Expertise from "./Expertise/Expertise";

import styles from "./DetailedPages.module.css";

function DetailPages() {
  return (
    <div className={styles.rootContainer}>
      <div id="about">
        <AboutMe />
      </div>
      <div>
        <Expertise />
      </div>
    </div>
  );
}

export default DetailPages;
