"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import calendarIcon from "@/public/calendar.svg";
import clockIcon from "@/public/clock.svg";
import locationIcon from "@/public/location.svg";
import cloudIcon from "@/public/cloud.svg";

import { people, peopleIcon } from "@/constants";

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
    </>
  );
};

export default BabyShowerPage;
