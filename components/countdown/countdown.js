"use client";

import { useState, useEffect } from "react";

import styles from "./countdown.module.css";

import { EB_Garamond } from "next/font/google";

const ebgaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500"] });

const Countdown = () => {
  // Set the wedding date and time
  const weddingDate = new Date("April 20, 2024 15:00:00 GMT+0200").getTime();

  // Initialize state for time remaining
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate time remaining
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className={styles.countdown}>
      <div className={styles.unit}>
        <span className={ebgaramond.className} suppressHydrationWarning>
          {timeRemaining.days}
        </span>{" "}
        Dni
      </div>
      <div className={styles.unit}>
        <span className={ebgaramond.className} suppressHydrationWarning>
          {timeRemaining.hours}
        </span>{" "}
        Ur
      </div>
      <div className={styles.unit}>
        <span className={ebgaramond.className} suppressHydrationWarning>
          {timeRemaining.minutes}
        </span>{" "}
        Minut
      </div>
      <div className={styles.unit}>
        <span className={ebgaramond.className} suppressHydrationWarning>
          {timeRemaining.seconds}
        </span>{" "}
        Sekund
      </div>
    </div>
  );
};

export default Countdown;
