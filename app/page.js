"use client"
/* eslint-disable @next/next/no-sync-scripts */
import CountdownSection from "@/components/countdown_section/countdown_section";
import styles from "./page.module.css";
import ImageSlider from "@/components/image_slider/image_slider";

import bgOne from "@/public/landing/background.jpg";
import bgTwo from "@/public/landing/image1.jpg";
import bgThree from "@/public/landing/image2.jpg";
import bgFour from "@/public/landing/image3.jpg";
import bgFive from "@/public/landing/image4.jpg";
import bgSix from "@/public/landing/image5.jpg";
import bgSeven from "@/public/landing/image6.jpg";

const backgrounds = [bgOne, bgTwo, bgThree, bgFour, bgFive, bgSix, bgSeven];

export default function Home() {
  return (
    <div>
      <ImageSlider images={backgrounds} />
      <div id="countdown">
        <CountdownSection />
      </div>
      <div suppressHydrationWarning className={styles.typeform}>
        <div className={styles.rsvp}>
          <h1>RSVP</h1>
        </div>
        <div suppressHydrationWarning data-tf-live="01HS8ZBK3FZ0BC7DHKT1PZZFSW"></div>
        <script suppressHydrationWarning src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
  );
}
