"use client";
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
    </div>
  );
}
