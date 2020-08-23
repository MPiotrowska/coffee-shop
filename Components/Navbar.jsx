import React from "react";
import styles from './Navbar.module.css'

function Navbar() {
    return (
  <nav className ={styles.column}>
    <ul className={styles.navList}>
    <li><a className={styles.navItem}href="#home">Home</a></li>
    <li><a className={styles.navItem} href="#news">Our Menu</a></li>
    <li><a className={styles.navItem} href="#news">Shop</a></li>
    <li><a className={styles.navItem} href="#contact">Contact</a></li>
    <li><a className={styles.navItem} href="#about">About</a></li>
    </ul>
</nav> 

 
    );
  }
  
  export default Navbar;