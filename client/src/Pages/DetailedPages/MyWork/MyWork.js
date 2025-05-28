import { useState } from "react";

import ProjectModal from "./ProjectModal/ProjectModal";

import messapp from "../../../asset/img/messapp.jpg";
import todolist from "../../../asset/img/todolist.jpg";
import game from "../../../asset/img/game.jpg";

import messapp_1 from "../../../asset/img/messapp_1.png";
import messapp_2 from "../../../asset/img/messapp_2.png";
import messapp_3 from "../../../asset/img/messapp_3.png";
import messapp_4 from "../../../asset/img/messapp_4.png";

import todolist_1 from "../../../asset/img/todolist_1.png";
import todolist_2 from "../../../asset/img/todolist_2.png";
import todolist_3 from "../../../asset/img/todolist_3.png";
import todolist_4 from "../../../asset/img/todolist_4.png";

import game_1 from "../../../asset/img/game_1.png";
import game_2 from "../../../asset/img/game_2.png";
import game_3 from "../../../asset/img/game_3.png";
import game_4 from "../../../asset/img/game_4.png";

import myWork from "../../../asset/vid/myWork.mp4";

import styles from "./MyWork.module.css";

function MyWork() {
  const [visibleMessApp, setVisibleMessApp] = useState(false);
  const [visibleTodoList, setVisibleTodoList] = useState(false);
  const [visibleGame, setVisibleGame] = useState(false);

  const onClickOpenVisibleMessApp = () => {
    setVisibleMessApp((prevState) => true);
  };

  const onClickCloseVisibleMessApp = (event) => {
    setVisibleMessApp((prevState) => false);
  };

  const onClickCloseVisibleMessAppBasedOnCondition = (event) => {
    if (event.target === event.currentTarget) {
      setVisibleMessApp((prevState) => false);
    }
  };

  const onClickOpenVisibleTodoList = () => {
    setVisibleTodoList((prevState) => true);
  };

  const onClickCloseVisibleTodoList = (event) => {
    setVisibleTodoList((prevState) => false);
  };

  const onClickCloseVisibleTodoListBasedOnCondition = (event) => {
    if (event.target === event.currentTarget) {
      setVisibleTodoList((prevState) => false);
    }
  };

  const onClickOpenVisibleGame = () => {
    setVisibleGame((prevState) => true);
  };

  const onClickCloseVisibleGame = (event) => {
    setVisibleGame((prevState) => false);
  };

  const onClickCloseVisibleGameBasedOnCondition = (event) => {
    if (event.target === event.currentTarget) {
      setVisibleGame((prevState) => false);
    }
  };

  return (
    <>
      <div className={styles.rootContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.headerTitleContainer}>
            <h3 className={styles.title}>My Work</h3>
            <p className={styles.text}>
              Developed a scalable and responsive web application that served
              hundreds of thousands of clients. <br /> <br /> Focused on
              creating high-performance applications with intuitive and dynamic
              interactions.
            </p>
          </div>
          <div>
            <video autoPlay loop muted className={styles.video}>
              <source src={myWork} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div
            className={styles.projectContainer}
            onClick={onClickOpenVisibleMessApp}
          >
            <div className={styles.imageContainer}>
              <img src={messapp} className={styles.image} alt="messapp" />
            </div>
            <div className={styles.projectDetailContainer}>
              <div className={styles.projectName}>
                <p>MessApp</p>
              </div>
              <div className={styles.skillListContainer}>
                <div className={styles.skillListTextContainer}>
                  <p>React JS / Express / MongoDB / GraphQL</p>
                  <p>Show project</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.projectContainer}
            onClick={onClickOpenVisibleTodoList}
          >
            <div className={styles.imageContainer}>
              <img src={todolist} className={styles.image} alt="todolist" />
            </div>
            <div className={styles.projectDetailContainer}>
              <div className={styles.projectName}>
                <p>MasterTask</p>
              </div>
              <div className={styles.skillListContainer}>
                <div className={styles.skillListTextContainer}>
                  <p>React JS / Express / PostgreSQL / REST API</p>
                  <p>Show project</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.projectContainer}
            onClick={onClickOpenVisibleGame}
          >
            <div className={styles.imageContainer}>
              <img src={game} className={styles.image} alt="game" />
            </div>
            <div className={styles.projectDetailContainer}>
              <div className={styles.projectName}>
                <p>Fine-Motor Skill Application</p>
              </div>
              <div className={styles.skillListContainer}>
                <div className={styles.skillListTextContainer}>
                  <p>HTML / CSS / JavaScript / p5.js </p>
                  <p>Show project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {visibleMessApp && (
        <ProjectModal
          listOfImages={[messapp_1, messapp_2, messapp_3, messapp_4]}
          appName={"MessApp"}
          appDetail={
            "MessApp is a web-based tool that creates a community of online users. With the application, users can connect to everyone, send messages daily, create interesting posts, and receive the latest notifications from their friends."
          }
          appCategorize={"Social Media Platform"}
          siteLink={"https://messenger-http.onrender.com/"}
          githubLink={"https://github.com/KhoaDinhNguyen/messenger"}
          closeModalHandler={onClickCloseVisibleMessApp}
          closeModalHandlerFromParent={
            onClickCloseVisibleMessAppBasedOnCondition
          }
        />
      )}
      {visibleTodoList && (
        <ProjectModal
          listOfImages={[todolist_1, todolist_2, todolist_3, todolist_4]}
          appName={"MasterTask"}
          appDetail={
            "The To-do List Application is a web-based tool that helps users effectively organize their tasks using advanced features such as viewing upcoming tasks, saving important tasks, and grouping tasks for projects."
          }
          appCategorize={"To-do List Application"}
          siteLink={"https://todolistweb-m0ui.onrender.com/"}
          githubLink={"https://github.com/KhoaDinhNguyen/ToDoList_v2"}
          closeModalHandler={onClickCloseVisibleTodoList}
          closeModalHandlerFromParent={
            onClickCloseVisibleTodoListBasedOnCondition
          }
        />
      )}
      {visibleGame && (
        <ProjectModal
          listOfImages={[game_1, game_2, game_3, game_4]}
          appName={"Fine-Motor Skill Aplication"}
          appDetail={
            "The Fine-Motor Skill Application is a website built to help toddlers practice and develop their motor skills through exercises."
          }
          appCategorize={"Game Application"}
          siteLink={"https://khoadinhnguyen.github.io/games_with_p5js/"}
          githubLink={"https://github.com/KhoaDinhNguyen/games_with_p5js"}
          closeModalHandler={onClickCloseVisibleGame}
          closeModalHandlerFromParent={onClickCloseVisibleGameBasedOnCondition}
        />
      )}
    </>
  );
}

export default MyWork;
