"use client";

import Image from "next/image";
import styles from "./image_slider.module.css";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ImageSlider = ({ images }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change background every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.background}>
      {images.map((bg, index) => (
        <Image
          key={index}
          src={bg}
          alt=""
          fill
          className={index === currentBgIndex ? styles.active : styles.inactive}
        />
      ))}
      <div className={styles.container}>
          <Link href="#countdown"><FontAwesomeIcon icon={faChevronDown} className={styles.arrow}/></Link>
      </div>
    </div>
  );
};

export default ImageSlider;
