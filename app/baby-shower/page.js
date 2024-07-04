import Image from "next/image";
import styles from "./page.module.css";
import calendarIcon from "@/public/calendar.svg";
import clockIcon from "@/public/clock.svg";
import locationIcon from "@/public/location.svg";

import { EB_Garamond } from "next/font/google";

export const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BabyShowerPage = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heading}>Baby Shower</h1>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Image src={calendarIcon} alt="" className={styles.icon} />
            <p className={`${styles.text} ${garamond.className}`}>
              Sobota, 20.7.2024
            </p>
          </div>
          <div className={styles.container}>
            <Image src={clockIcon} alt="" className={styles.icon} />
            <p className={`${styles.text} ${garamond.className}`}>
              17.00 - 19.00
            </p>
          </div>
          <div className={styles.container}>
            <Image src={locationIcon} alt="" className={styles.icon} />
            <p className={`${styles.text} ${garamond.className}`}>
              Novo Polje, cesta X/20
            </p>
          </div>
        </div>
      </main>
      <section className={styles.reception}></section>
    </>
  );
};

export default BabyShowerPage;
