import React, { useRef, useState, useEffect, useMemo } from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";

export const ParallaxBox = ({
  children,
  yRange = [0, 200],
  easing = [0.42, 0, 0.58, 1],
  ...rest
}) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setClientHeight(window.innerHeight);
    };

    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [ref]);

  // const transformInitialValue =
  //   elementTop - window.innerHeight <= 0 ? 0 : elementTop - window.innerHeight;
  // const transformInitialValue = elementTop - clientHeight * triggerPoint;
  // const transformFinalValue = elementTop + yOffset;

  // const yRange = [transformInitialValue, transformFinalValue];

  const y = useTransform(scrollY, yRange, [0, -elementBottom], easing);

  console.log('scrollY', scrollY)

  return (
    <motion.div ref={ref} initial={{ y: 0 }} style={{ y }} {...rest}>
      {children}
    </motion.div>
  );
};
