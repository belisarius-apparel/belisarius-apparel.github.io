// Import React and useState
import React, { useState, useEffect, useRef } from "react";
import { LettersPullUp } from "../Framer/LettersPullUp";
import { LettersPullDown } from "../Framer/LettesPullDown";
import { ButtonWithPullAnimation } from "../Framer/ButtonWithAnimation";

const ProductGallery_MobileCarousel = ({
  currentIndexDefault = 0,
  products = [],
  interval = 3000,
}) => {
  // Show State
  const [currentIndex, setCurrentIndex] = useState(currentIndexDefault);

  const intervalRef = useRef(null); // Using useRef to persist the interval

  // Function to start auto-slide interval
  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear existing interval
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, interval);
  };

  // Automatically cycle through images every [interval] millisecond
  useEffect(() => {
    startAutoSlide(); // Start the auto-slide when the component mounts

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Cleanup on component unmount
      }
    };
  }, [products.length]);

  // Function to handle indicator click and reset the timer
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    startAutoSlide(); // Reset the auto-slide timer when a user clicks a dot
  };

  return (
    <section className="md:hidden relative h-[100vh] max-h-[480px] md:max-h-[720px] overflow-hidden">
      <div className="relative w-full max-w-[1440px] h-full">
        {/* Carousel Container */}
        <div
          className="flex h-full m-auto transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products &&
            products.map((item, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full h-full bg-blue-500"
              >
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full min-h-full brightness-50"
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

        {/* Slide Indicators */}
        <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
          {products &&
            products.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-500"
                } transition-colors duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery_MobileCarousel;
