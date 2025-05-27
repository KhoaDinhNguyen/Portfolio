import styles from "./AboutMe.module.css";

import myPhoto2 from "../../../asset/myPhoto2.jpg";

function AboutMe() {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>About me</h3>
      </div>

      <div className={styles.contentContainer}>
        <div>
          <ul className={styles.aboutMeList}>
            <li>
              <p>
                I'm Computer Science student and currently a junior at Arionza
                State University
              </p>
            </li>
            <li>
              <p>
                I have more than one year experience in doing full-stack
                projects
              </p>
            </li>
            <li>
              <p>I'm passionate about learning new things ....</p>
            </li>
            <li>
              <p>
                I love collaborate with my friends and teachers to achieve
                goals.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <img src={myPhoto2} alt="myPhoto2" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
