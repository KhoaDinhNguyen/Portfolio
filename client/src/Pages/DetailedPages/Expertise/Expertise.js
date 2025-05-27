import styles from "./Expertise.module.css";

import { ReactSVG, MongoDBSVG, UISVG } from "../../../SVG/svg";

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
              Passionate about UI/UX. Experienced in developing HTML, CS, JS,
              React and Redux
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
              Skilled in handle REST API request. Developent experience in
              Express.js, MongoDB, MySQL, and GraphQL
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
            <p>.. in deploy responsive website.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
