import { useState } from "react";

import {
  BackSVG,
  CloseSVG,
  ForwardSVG,
  GitHubSVG,
  LinkSVG,
} from "../../../../SVG/svg";

import styles from "./ProjectModal.module.css";

function ProjectModal({
  listOfImages,
  appName,
  appCategorize,
  appDetail,
  siteLink,
  githubLink,
  closeModalHandler,
  closeModalHandlerFromParent,
}) {
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const onClickForward = () => {
    if (currImgIdx === listOfImages.length - 1) {
      setCurrImgIdx((prevState) => 0);
    } else {
      setCurrImgIdx((prevState) => prevState + 1);
    }
  };

  const onClickBackward = () => {
    if (currImgIdx === 0) {
      setCurrImgIdx((prevState) => listOfImages.length - 1);
    } else {
      setCurrImgIdx((prevState) => prevState - 1);
    }
  };

  return (
    <div className={styles.rootContainer} onClick={closeModalHandlerFromParent}>
      <div className={styles.contentImageContainer}>
        <div className={styles.imageContainer}>
          <img
            src={listOfImages[currImgIdx]}
            alt="app"
            className={styles.image}
          />
          <div className={styles.arrrowImages}>
            <div className={styles.arrowImage} onClick={onClickBackward}>
              <BackSVG />
            </div>
            <div className={styles.arrowImage} onClick={onClickForward}>
              <ForwardSVG />
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div>
            <p className={styles.appName}>{appName}</p>
            <p className={styles.appCategorize}>{appCategorize}</p>
          </div>
          <div className={styles.appDetailContainer}>
            <p>{appDetail}</p>
          </div>
          <div className={styles.buttonsContainer}>
            <div>
              <a href={siteLink} target="_blank" rel="noreferrer">
                <button className={styles.siteButton}>
                  <div className={styles.siteTextContainer}>
                    <LinkSVG />
                    <p>View site</p>
                  </div>
                  <span></span>
                </button>
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className={styles.responButtonButtonContainer}
              >
                <button className={styles.responButton}>
                  <div className={styles.siteTextContainer}>
                    <GitHubSVG />
                    <p>View responsitory</p>
                  </div>
                  <span></span>
                </button>
              </a>
            </div>
            <div>
              <button
                className={styles.closeButton}
                onClick={closeModalHandler}
              >
                <CloseSVG />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
