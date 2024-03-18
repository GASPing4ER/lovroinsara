import React from "react";
import Countdown from "../countdown/countdown";
import Image from "next/image";
import styles from "./countdown_section.module.css";

import { Pinyon_Script } from "next/font/google";

const pinyon_script = Pinyon_Script({ subsets: ["latin"], weight: ["400"] });

import logo from "@/public/logo-2.png";
import cardImage from "@/public/card-image.jpg";

const CountdownSection = () => {
  return (
    <div className={styles["countdown-section"]}>
      <div className={styles.card}>
        <Image src={cardImage} alt="" className={styles.cardImage}/>
        <div className={styles.content}>
          <Image src={logo} alt="" />
          <div className={styles["inner-content"]}>
            <h2>Cerkvena poroka</h2>
            <p>Kdaj? 20.04.2024 ob 15:00</p>
            <p>Kje? Frančiškanski trg 1, Novo mesto</p>
          </div>
          <div className={styles["inner-content"]}>
            <h2>Praznovanje</h2>
            <p>Kdaj? 20.04.2024 ob 19:00</p>
            <p>Kje? Na Brezovici 50, Novo mesto</p>
          </div>
          <div className={styles["inner-content"]}>
            <h2>Se vidimo čez...</h2>
            <Countdown />
          </div>
          <p className={pinyon_script.className}>Loti in Gašper Šimec</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
