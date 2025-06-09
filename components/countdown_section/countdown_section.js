import React from "react";
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
            <p className={styles["comment"]}>
              **Parkirne prostore pred cerkvijo pustite za najožje člane družine
              in MPP band.
            </p>
            <p className={styles["comment"]}>Alternative:</p>
            <div className={styles["options"]}>
              <a
                className={styles["comment_link"]}
                href="https://www.google.com/maps?q=46.3188972,14.9547238&entry=gps&lucs=94275313,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISEjI1LjIyLjAuNzYzNTE5NzAyMBgAINeCAypZOTQyNzUzMTMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDRCAlNJ&skid=13c4eb2c-8386-48e9-a94b-374ad8b72141&g_st=com.google.maps.preview.copy"
              >
                Opcija 1
              </a>
              <a
                className={styles["comment_link"]}
                href="https://maps.app.goo.gl/sBLJbwPUgD6DfoGH8?g_st=com.google.maps.preview.copy"
              >
                Opcija 2
              </a>
              <a
                className={styles["comment_link"]}
                href="https://www.google.com/maps?q=46.3203046,14.9507923&entry=gps&lucs=94275313,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISEjI1LjIyLjAuNzYzNTE5NzAyMBgAINeCAypZOTQyNzUzMTMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDRCAlNJ&skid=9c5ad9ab-89ac-4b7c-9e3a-be264cd486fc&g_st=com.google.maps.preview.copy"
              >
                Opcija 3
              </a>
            </div>
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
