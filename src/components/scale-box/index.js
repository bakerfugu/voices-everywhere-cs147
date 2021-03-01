import React, { useMemo, useContext } from "react";
import { motion, MotionConfig } from "framer-motion";

import { IntersectionContext } from "../intersection-observer";

export const ScaleBox = ({
  children,
  delayOrder, // order of appearance
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1] // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: 1,
      ease: easing
    }),
    [duration, delayOrder, easing]
  );

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition
    },
    show: {
      scale: 1,
      opacity: 1,
      transition
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
