// Import React and useState
import React, { useState, useEffect } from "react";
import { LettersPullUp } from "../../../components/Framer/LettersPullUp";
import { LettersPullDown } from "../../../components/Framer/LettesPullDown";
import { ButtonWithPullAnimation } from "../../../components/Framer/ButtonWithAnimation";
import hero_homepage from "../../../lib/data/hero_homepage.json";

const HeroSection = ({ currentIndexDefault = 0 }) => {
  // Array of image URLs
  const { hero_display } = hero_homepage;

  const [currentIndex, setCurrentIndex] = useState(currentIndexDefault);

  // Automatically cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hero_display.length);
    }, 6000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [hero_display.length]);

  return (
    <section className="relative h-[100vh] max-h-[480px] md:max-h-[720px] overflow-hidden">
      <div className="relative w-full max-w-[1440px] h-full">
        {/* Carousel Container */}
        <div
          className="flex h-full m-auto transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {hero_display &&
            hero_display.map((item, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full h-full bg-blue-500"
              >
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full min-h-full object-cove r brightness-50"
                />
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end pb-8 overflow-hidden md:items-center max-w-[100vw]">
                  <div className="z-10 max-w-lg px-4 md:px-12 text-start">
                    <h1 className="text-xl text-white quicksand-regular">
                      <LettersPullDown text={item.text} />
                    </h1>
                    <h1 className="mb-4 text-4xl text-white md:text-5xl poppins-bold">
                      <LettersPullUp text={item.label} />
                    </h1>
                    <ButtonWithPullAnimation
                      text="Lihat Koleksi"
                      animationType="pulldown"
                      className="px-4 py-2 bg-white rounded-3xl"
                      duration={1}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
