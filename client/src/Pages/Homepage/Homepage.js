import styles from "./Homepage.module.css";

import myPhoto from "../../asset/myPhoto.jpg";

function Homepage() {
  return (
    <div className={styles.rootContainer}>
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
        <img src={myPhoto} alt="my photo" className={styles.image} />
      </div>
      <div className={styles.buttonContainer}>
        <a>
          <button className={styles.button}>
            About Me
            <span className={styles.motion}></span>
            <span className={styles.motion}></span>
            <span className={styles.motion}></span>
            <span className={styles.motion}></span>
          </button>
        </a>
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
