import { GitHubSVG2, LinkedInSVG } from "../../SVG/svg";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.rootContainer}>
      <div className={styles.logosContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.svgContainer}>
            <a
              href="https://www.linkedin.com/in/khoanguyenb203702b5"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInSVG />
            </a>
          </div>
          <div className={styles.svgContainer}>
            <a
              href="https://www.linkedin.com/in/khoanguyenb203702b5"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInSVG />
            </a>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.svgContainer}>
            <a
              href="https://github.com/KhoaDinhNguyen"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubSVG2 />
            </a>
          </div>
          <div className={styles.svgContainer}>
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
      <div className={styles.idTextContainer}>
        <p className={styles.idText}>
          Khoa Nguyen <span>@2025</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
