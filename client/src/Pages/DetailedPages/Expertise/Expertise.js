import { ReactSVG, MongoDBSVG, UISVG } from "../../../SVG/svg";

import expertise from "../../../asset/img/expertise.png";

import styles from "./Expertise.module.css";

function Expertise() {
  return (
    <div className={styles.rootContainer}>
      <div>
        <h3 className={styles.title}>My Expertise</h3>
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skillContainer}>
          <div className={styles.skillTitle}>
            <ReactSVG />
            <p>
              <span className={styles.frontendSpan}>Frontend</span> Development
            </p>
          </div>
          <div className={styles.skillText}>
            <p>
              Competence in managing frontend states and effects. Experienced in
              developing HTML, CSS, JS, React, and Redux
            </p>
          </div>
        </div>
        <div className={styles.skillContainer}>
          <div className={styles.skillTitle}>
            <MongoDBSVG />
            <p>
              <span className={styles.backendSpan}>Backend</span> Development
            </p>
          </div>
          <div className={styles.skillText}>
            <p>
              Skilled in handling REST API requests. Experienced in Express.js,
              MongoDB, MySQL, and GraphQL.
            </p>
          </div>
        </div>
        <div className={styles.skillContainer}>
          <div className={styles.skillTitle}>
            <UISVG />
            <p>
              <span className={styles.uiSpan}>UI / UX</span> Design
            </p>
          </div>
          <div className={styles.skillText}>
            <p>
              Passionate about UI/UI. Specialized in building dynamic,
              responsive website applications.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imageBackgroundContainer}>
        <img src={expertise} alt="code" className={styles.image} />
      </div>
    </div>
  );
}

export default Expertise;
