import React from "react";
import ApplicationMeta from "../../components/SEO/ApplicationMeta";
import ProductGallery_MobileCarousel from "../../components/ProductGalleries/MobileCarousel";
import featuring from "../../lib/data/featuring.json";

const HomePage = () => {
  return (
    <div id="homePage">
      {/* Metadata using Helmet */}
      <ApplicationMeta />

      {/* Hero Sections */}
      <ProductGallery_MobileCarousel
        interval={3000}
        products={featuring.featuring}
      />
    </div>
  );
};

export default HomePage;
