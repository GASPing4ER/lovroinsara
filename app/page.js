"use client";
import CountdownSection from "@/components/countdown_section/countdown_section";
import ImageSlider from "@/components/image_slider/image_slider";

import bgOne from "@/public/landing/DSC_1.jpg";
import bgTwo from "@/public/landing/DSC_2.jpg";
import bgThree from "@/public/landing/DSC_3.jpg";
import bgFour from "@/public/landing/DSC_4.jpg";
import bgFive from "@/public/landing/DSC_5.jpg";
import bgSix from "@/public/landing/DSC_6.jpg";
import Info from "@/components/info/info";
import General from "@/components/general/general";

const backgrounds = [bgOne, bgTwo, bgThree, bgFour, bgFive, bgSix];

export default function Home() {
  return (
    <div>
      <ImageSlider images={backgrounds} />
      <div id="countdown">
        <CountdownSection />
      </div>
      <Info />
      <General />
    </div>
  );
}
