import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.column}>
      <ul className={styles.navList}>
        <li className={`${styles.listItem} ${styles.hasChildren}`}>
          <a className={styles.listItemLink} href="#home">
            Home
          </a>
          <ul className={styles.listItemLinkSub}>
            <li className={styles.listItemChild}>
              <a className={styles.listItemChildLink} href="#news">
                Meet Our Team
              </a>
            </li>
            <li className={styles.listItemChild}>
              <a className={styles.listItemChildLink} href="#news">
                What We Offer
              </a>
            </li>
            <li className={styles.listItemChild}>
              <a className={styles.listItemChildLink} href="#news">
               Our Process
              </a>
            </li>
            <li className={styles.listItemChild}>
              <a className={styles.listItemChildLink} href="#about">
                About
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#news">
            Our Menu
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#news">
            Shop
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#contact">
            Contact
          </a>
        </li>
     
      </ul>
    </nav>
  );
}

export default Navbar;
