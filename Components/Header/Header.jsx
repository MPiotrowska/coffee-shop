import React from "react";

import Logo from "../Logo/Logo";
import styles from "./Header.module.css"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <Logo />
        <Navbar/>
        </div>
      </div>
      <Hero />
    </>
  );
}

export default Header;
