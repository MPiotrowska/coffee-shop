import React from "react";
import styles from "./Hero.module.css";

function Hero(props) {
  return (
    <div className={styles.hero}>
      <img src="/Images/Hero-large.jpg" alt="Coffe cup" />
      <div className={styles.textContainer}>
        <img
          className={styles.coffeImage}
          src="/Images/Coffee.png"
          alt="Coffee"
        />
        <h1 className={styles.title}>Importance of Coffee</h1>
        <h2 className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          eaque magnam natus vel architecto atque iste dolore sit.
        </h2>
        <button className={styles.heroButton}>Read More</button>
      </div>
    </div>
  );
}

export default Hero;
