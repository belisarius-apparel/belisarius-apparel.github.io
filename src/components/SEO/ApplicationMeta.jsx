import React from "react";
import { Helmet } from "react-helmet-async";
import {
  app_title,
  app_url,
  app_desc,
  app_keyowrds,
  app_ogImage,
  app_ogTitle,
} from "../../config/constants";

const ApplicationMeta = ({
  title = app_title,
  description = app_desc,
  canonical = app_url,
  keywords = app_keyowrds,
  o_title = app_ogTitle,
  o_image = app_ogImage,
}) => {
  const meta = {
    title: title,
    description: description,
    canonical: canonical,
    meta: {
      name: {
        keywords: keywords,
        robots: "index, follow",
      },
    },
    openGraph: {
      title: o_title,
      image: o_image,
    },
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{meta.title}</title>
      <link rel="canonical" href={meta.canonical} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.meta.name.keywords} />
      <meta name="robots" content={meta.meta.name.robots} />

      {/* Open Graph Metadata */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.openGraph.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.openGraph.image} />

      {/* Twitter Metadata */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={meta.openGraph.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.openGraph.image} />
    </Helmet>
  );
};

export default ApplicationMeta;
