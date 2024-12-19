import React from "react";
import HeroSection from "./HeroSection/HeroSection";

const HomePage = () => {
  return (
    <div id="homePage">
      {/* Hero Section */}
      <HeroSection />
      <HeroSection currentIndexDefault={1} />
      <HeroSection currentIndexDefault={2} />
    </div>
  );
};

export default HomePage;
