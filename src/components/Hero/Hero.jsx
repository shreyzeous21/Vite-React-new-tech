import React from "react";
import styles from "./Hero.module.css";
import { getImgUrl } from "../../util";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shrey</h1>
        <p className={styles.description}>
          I'm a full-stack developer. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:shrey.sadhukhan21@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImgUrl("heroImage.svg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
