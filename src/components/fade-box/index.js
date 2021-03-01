import React, { useState } from "react";
import { useViewportScroll, useTransform, useSpring, motion } from "framer-motion";

export const FadeBox = ({
  children,
  childRef,
  // forwardClassName,
  // source = "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&w=1000&q=80",
  offsetHeight = 100,
  customHeight = 0,
  // yOffset = 100, // number > 0
  // easing = [0.42, 0, 0.58, 1],
  // // easing = "easeInOut", // [number, number, number, number] | "linear" | "easeIn" |
  // //"easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // //"backInOut" | "anticipate" | EasingFunction;
  // triggerPoint = 0.1, // value between 0 and 1 (top and bottom of the window), point to start animation
  // fadeOut = false, // true | false fade an element out on end of the animation
  ...rest
}) => {
  // const { scrollY } = useViewportScroll();
  // const [elementTop, setElementTop] = useState(0);
  // const [elementBottom, setElementBottom] = useState(0);
  // const [clientHeight, setClientHeight] = useState(0);

  const [childHeight, setChildHeight] = useState(0);
  const { scrollY } = useViewportScroll();

  React.useEffect(() => {
    // Gets the height of the image
    // hopefully this works for divs lol
    const childHeight = (childRef.current && childRef.current.height) || 0;
    console.log("here cheight", childHeight)
    if (childHeight) {
      setChildHeight(childHeight);
    } else {
      setChildHeight(window.innerHeight)
    }
  }, [childHeight]);

  // Choose at what point the image opacity becomes 0
  // E.G: 50px from the top
  // const offsetHeight = 50;
  // Vertical scroll distance in pixels.
  // Transforms scroll and image height values to opacity values
  const yRange = useTransform(scrollY, [childHeight - offsetHeight, 0], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

  console.log('scrollY', scrollY)

  return (
    <motion.div
      alt="gradient"
      style={{ opacity }}
    >
      {children}
    </motion.div>
  );
};
