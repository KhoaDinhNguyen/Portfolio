import { useEffect, useRef, useState } from "react";

import { DoubleUpSVG } from "../../../SVG/svg";

import styles from "./Contact.module.css";

function Contact() {
  const contactRef = useRef(null);
  const [scrollAt, setScrollAt] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (contactRef.current) {
        const elementTop = contactRef.current.getBoundingClientRect().top;
        if (-600 <= elementTop && elementTop <= 600) {
          setScrollAt((prevState) => true);
          window.removeEventListener("scroll", scrollHandler);
        }
      }
    };
    window.addEventListener("scroll", scrollHandler);
  }, [contactRef, setScrollAt]);

  const onSubmitForm = (event) => {
    event.prevenDefault();
  };
  return (
    <div
      className={`${styles.rootContainer} ${
        scrollAt ? styles.animationStart : ""
      }`}
      ref={contactRef}
    >
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles.titleUnderline}></div>
      </div>
      <div>
        <p className={styles.prompt}>Have a question? Feel free!!!</p>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={onSubmitForm}>
          <div className={styles.inputContainer}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <textarea
              id="message"
              name="message"
              placeholder="Type Message"
              className={styles.textArea}
              required
            />
          </div>
          <div className={styles.submitContainer}>
            <label htmlFor="submitButton" className={styles.submitLabel}>
              <p className={styles.labelText}>Submit</p>
            </label>
            <input
              type="submit"
              id="submitButton"
              name="submitButton"
              className={styles.submitInput}
            />
          </div>
        </form>
      </div>
      <div className={styles.moveToTop}>
        <a href="#home">
          <DoubleUpSVG />
        </a>
      </div>
    </div>
  );
}

export default Contact;
