import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export function LettersPullDown({ text, className = "", once = false }) {
  const splittedText = text.split(""); // Split the text into individual characters
  const ref = React.useRef(null); // Create a single ref for the container
  const isInView = useInView(ref, { once: once }); // Check if the container is in view

  // Animation variants for pull-down effect
  const pulldownVariant = {
    initial: { y: -10, opacity: 0 }, // Start slightly above with 0 opacity
    animate: (i) => ({
      y: 0, // Move to the original position
      opacity: 1, // Fade in
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
          variants={pulldownVariant}
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
