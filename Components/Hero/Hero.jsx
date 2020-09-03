import React from "react";
import styles from "./Hero.module.css";

function Hero(props) {
  return (
    <div className={styles.hero}>
      <img
        src="/Images/Hero-large.jpg"
        alt="Two people sitting and enjoying a mountainous scenery"
      />
      <div className={styles.textContainer}>
        
    
      <img className={styles.coffeImage}
        src="/Images/Coffee.png"
        alt="Coffee"
      />
        <h1 className={styles.title}>Get out and stretch your imagination</h1>
        <h2 className={styles.text}>Plan a different kind of getaway to uncover the hidden gems near you.</h2>
      </div>
    </div>
  );
}

export default Hero;
