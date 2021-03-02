import React, { useState } from "react";
import { useViewportScroll, useTransform, useSpring, motion } from "framer-motion";

export const FadeBox = ({
  children,
  childRef,
  // forwardClassName,
  // source = "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&w=1000&q=80",
  offsetHeight = 50,
  customChildHeight = 0,
  scrollInputRange,
  opacityOutputRange = [0, 1],
  ...rest
}) => {
  const { scrollY } = useViewportScroll();
  const [childHeight, setChildHeight] = useState(0);

  React.useEffect(() => {
    // get height of image if possible,  or the whole screen
    const childHeight = (childRef.current && childRef.current.height) || 0;
    if (childHeight) {
      setChildHeight(childHeight);
    } else if (customChildHeight) {
      setChildHeight(customChildHeight);
    } else {
      setChildHeight(window.innerHeight)
    }
  }, [childHeight]);

  const yRange = useTransform(scrollY, scrollInputRange || [childHeight - offsetHeight, 0], opacityOutputRange);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

  // console.log('scrollY', scrollY)

  return (
    <motion.div
      alt="gradient"
      style={{ opacity }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
