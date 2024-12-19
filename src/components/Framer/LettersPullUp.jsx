import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export function LettersPullUp({ text, className = "", once = false }) {
  const splittedText = text.split(""); // Split the text into individual characters
  const ref = React.useRef(null); // Create a single ref for the container
  const isInView = useInView(ref, { once: once }); // Check if the container is in view

  // Animation variants for pull-up effect
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Stagger animation based on index
      },
    }),
  };

  return (
    <div ref={ref} className="flex">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={className}
        >
          {/* Handle spaces properly */}
          {current === " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
