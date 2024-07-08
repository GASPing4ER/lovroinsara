"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import calendarIcon from "@/public/calendar.svg";
import clockIcon from "@/public/clock.svg";
import locationIcon from "@/public/location.svg";
import cloudIcon from "@/public/cloud.svg";
import oblekeIcon from "@/public/obleke.svg";
import igraceIcon from "@/public/igrace.svg";
import higienaIcon from "@/public/higiena.svg";

import { people, peopleIcon, obleke, igrace, higiena } from "@/constants";

import { EB_Garamond } from "next/font/google";

export const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BabyShowerPage = ({ searchParams }) => {
  const [hoveredPerson, setHoveredPerson] = useState(null);

  const isArray = Array.isArray(searchParams.name);
  let name;
  if (isArray) {
    name = searchParams.name[0] + " & " + searchParams.name[1];
  } else {
    name = searchParams.name;
  }

  const handleMouseEnter = (person) => {
    setHoveredPerson(person);
  };

  const handleMouseLeave = () => {
    setHoveredPerson(null);
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heading}>Baby Shower</h1>
        <h2 className={styles.subheading}> Živjo {name}!</h2>
        <p>
          Lepo {isArray ? "vabljena" : "vabljen/a"} na Baby Shower! Več
          informacij tukaj:
        </p>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Image src={calendarIcon} alt="" className={styles.icon} />
            <p className={`${styles.text} ${garamond.className}`}>
              Petek, 19.7.2024
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
              Novo Polje, cesta X 20
            </p>
          </div>
        </div>
      </main>
      <section className={styles.reception}>
        <h2 className={styles.subheading}>Kdo še pride?</h2>
        <p>
          Če te zanima, kdo je še povabljen na Baby Shower, pokukaj v oblačke in
          preveri, kdo vse bo tam!
        </p>
        {/* Preload hover images */}
        <div style={{ display: "none" }}>
          {peopleIcon.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`preload icon ${index}`}
              width={1}
              height={1}
            />
          ))}
        </div>
        <div className={styles.people}>
          {people.map((person, index) => (
            <div
              key={person}
              className={styles.person}
              onMouseEnter={() => handleMouseEnter(person)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={hoveredPerson === person ? peopleIcon[index] : cloudIcon}
                alt="cloud icon"
                width={250}
                loading="lazy"
              />
              {hoveredPerson === person && (
                <p className={styles.personName}>{person}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.gifts}>
        <p className={styles["special-p"]}>
          *Če nama želiš kaj prinesti in nimaš ideje kaj oz. česa še nimava, je
          tukaj nekaj čisto neobveznih idej iz najinega seznama nakupov, ki naju
          še čakajo:
        </p>
        <div className={styles["list"]}>
          <div className={styles["list-left"]}>
            <Image src={oblekeIcon} alt="" width={200} />
            {obleke.map((obleka, index) => (
              <div key={index} className={styles.predlogi}>
                <Image
                  src={cloudIcon}
                  alt="cloud icon"
                  width={75}
                  loading="lazy"
                />
                <p>{obleka}</p>
              </div>
            ))}
            <Image src={igraceIcon} alt="" width={200} />
            {igrace.map((igraca, index) => (
              <div key={index} className={styles.predlogi}>
                <Image
                  src={cloudIcon}
                  alt="cloud icon"
                  width={75}
                  loading="lazy"
                />
                <p>{igraca}</p>
              </div>
            ))}
          </div>
          <div className={styles["list-right"]}>
            <Image src={higienaIcon} alt="" width={200} />
            {higiena.map((item, index) => (
              <div key={index} className={styles.predlogi}>
                <Image
                  src={cloudIcon}
                  alt="cloud icon"
                  width={75}
                  loading="lazy"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BabyShowerPage;
