import styles from "./Homepage.module.css";

import myPhoto from "../../asset/img/myPhoto.jpg";
import { GitHubSVG2, LinkedInSVG } from "../../SVG/svg";

function Homepage() {
  return (
    <div className={styles.rootContainer} id="home">
      <NightStar />
      <div className={styles.codeTextContainer}>
        <p className={styles.codeText}>
          <span className={styles.redText}>&#65308;</span>
          <span className={styles.yellowText}>KhoaNguyen /</span>
          <span className={styles.redText}>&#65310;</span>
        </p>
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Ngoc Dinh Khoa Nguyen</h2>
        <p className={styles.occupation}>
          Full-Stack Developer, UI-Engineer, & Designer
        </p>
        <img src={myPhoto} alt="myself" className={styles.image} />
      </div>
      <div className={styles.buttonContainer}>
        <a href="#about">
          <button className={styles.button}>
            About Me
            <span className={styles.motion}></span>
            <span className={styles.motion}></span>
            <span className={styles.motion}></span>
            <span className={styles.motion}></span>
          </button>
        </a>
      </div>
      <div className={styles.contactMeContainer}>
        <div>
          <p className={styles.contactMe}>Contact Me</p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/khoanguyenb203702b5"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInSVG />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/KhoaDinhNguyen"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubSVG2 />
          </a>
        </div>
      </div>
    </div>
  );
}

function NightStar() {
  return (
    <div>
      <div className={styles.night}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
      <div className={styles.night}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
      <div className={styles.night}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    </div>
  );
}
export default Homepage;
