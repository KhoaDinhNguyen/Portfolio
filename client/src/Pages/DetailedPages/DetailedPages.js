import AboutMe from "./AboutMe/AboutMe";
import Expertise from "./Expertise/Expertise";
import MyWork from "./MyWork/MyWork";
import Contact from "./Contact/Contact";

import styles from "./DetailedPages.module.css";
import NavigationBar from "./NavigationBar/NavigationBar";

function DetailPages() {
  return (
    <>
      <div className={styles.rootContainer}>
        <div className={styles.navigationBar}>
          <NavigationBar />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="expertise">
          <Expertise />
        </div>
        <div id="work">
          <MyWork />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default DetailPages;
