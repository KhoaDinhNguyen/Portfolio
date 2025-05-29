import styles from "./AboutMe.module.css";

import myPhoto2 from "../../../asset/img/myPhoto2.jpg";

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
                I'm a Computer Science student and currently a junior at Arizona
                State University
              </p>
            </li>
            <li>
              <p>
                I have over a year of experience in developing full-stack
                projects and am passionate about learning new technologies
              </p>
            </li>
            <li>
              <p>
                I enjoy collaborating with my peers and teachers to achieve our
                goals
              </p>
            </li>
            <li>
              <p>
                I used to work in the public community for five years, working
                to protect the environment, help people, and build connections
              </p>
            </li>
            <li>
              <p>My motivation is to be better than I was yesterday</p>
            </li>
            <li>
              My goal is to create a social product that addresses the problems
              faced by others
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
