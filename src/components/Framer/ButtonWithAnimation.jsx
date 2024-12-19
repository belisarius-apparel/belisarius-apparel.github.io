import { motion, useInView } from "framer-motion";
import React from "react";

export function ButtonWithPullAnimation({
  text,
  onClick,
  duration = 0.5,
  className = "",
  once = false,
  animationType = "pullUp", // "pullUp" or "pullDown"
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: once });

  // Animation variants for pull-up or pull-down
  const pullAnimation = {
    initial: { y: animationType === "pullUp" ? 10 : -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.button
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : ""}
      variants={pullAnimation}
      transition={{ duration: duration, ease: "easeOut" }}
      onClick={onClick}
      className={`${className}`}
    >
      {text}
    </motion.button>
  );
}
