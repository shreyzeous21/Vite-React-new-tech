import React from "react";
import styles from "./Navbar.module.css";
import { getImgUrl } from "../../util";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio | vite
      </a>
      <div className={styles.menu}>
        <img
          src={getImgUrl("menu.svg")}
          alt="menu"
          className={styles.menuBtn}
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
