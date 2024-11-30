import React from "react";
import Countdown from "../countdown/countdown";
import Image from "next/image";
import styles from "./countdown_section.module.css";

import { Pinyon_Script } from "next/font/google";

const pinyon_script = Pinyon_Script({ subsets: ["latin"], weight: ["400"] });

import logo from "@/public/logo.png";
import cardImage from "@/public/landing/DSC_3.jpg";

const CountdownSection = () => {
  return (
    <div className={styles["countdown-section"]}>
      <div className={styles.card}>
        <Image src={cardImage} alt="" className={styles.cardImage} />
        <div className={styles.content}>
          <Image src={logo} alt="" />
          <div className={styles["inner-content"]}>
            <h2>Cerkvena poroka</h2>
            <p>Kdaj? 15. 8. 2025 ob 15.00</p>
            <p>Kje? Samostanska pot 50, 3331 Nazarje</p>
          </div>
          <div className={styles["inner-content"]}>
            <h2>Praznovanje</h2>
            <p>Kdaj? 15. 8. 2025 ob 18.00</p>
            <p>Kje? Lačja vas 22, 3331 Nazarje</p>
          </div>
          <p className={pinyon_script.className}>Sara in Lovro</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
