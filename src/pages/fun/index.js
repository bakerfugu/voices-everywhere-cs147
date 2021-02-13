import React from 'react';
import { motion, useViewportScroll } from "framer-motion";
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function Fun() {
  const { scrollYProgress } = useViewportScroll()

  return (
    <>
      <Layout title="Hello">
        <div
          style={{height: "500px"}}
        >
          Hello There
        </div>
        <motion.img
          key={"derp"}
          src={"img/171.svg"}
          transition={{ duration: 2, type: "tween" }}
          style={{opacity: scrollYProgress}}
          height="500px"
        />
        <div
          style={{height: "500px"}}
        >
          Hello There
        </div>
      </Layout>
    </>
  );
}

export default Fun;

// function Fun() {
//   return (
//     // <>
//     //   <Layout title="Hello">
//     //     <div>Hello</div>
//     //     <Frame size={150} background={"#f00"} radius={30} />
//     //     <div>There</div>
//     //   </Layout>
//     // </>
//     <Scroll 
//       width={"100%"}
//       height={"300%"}
//     >
//       <Frame size={1000} image="https://github.com/bakerfugu/voices-everywhere-cs147/raw/main/static/img/171.svg">Hello World!</Frame>
//     </Scroll>
//   );
// }