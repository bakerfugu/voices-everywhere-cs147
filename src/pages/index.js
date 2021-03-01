import React, { useRef } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {
  Typography,
  Box,
} from '@material-ui/core';
// import { useViewportScroll, useTransform, useSpring, motion } from "framer-motion";

import {
  ParallaxBox,
  IntersectionObserver,
  ScaleBox,
  FadeBox,
} from '../components'

const features = [
  {
    title: 'Ayelet Drazen',
    imageUrl: 'img/ayelet-face.png',
    description: (
      <>
        B.A. Political Science
        <br/>
        M.S. Computer Science
      </>
    ),
  },
  {
    title: 'Baker Sharp',
    imageUrl: 'img/baker-face.png',
    description: (
      <>
        B.S. Computer Science
        <br/>
        Education Minor
      </>
    ),
  },
  {
    title: 'Krishnan Nair',
    imageUrl: 'img/krishnan-face.png',
    description: (
      <>
        B.S. Computer Science
        <br/>
        
      </>
    ),
  },
  {
    title: 'Taylor Lallas',
    imageUrl: 'img/taylor-face.png',
    description: (
      <>
        B.A. Economics
        <br/>
        M.S. Computer Science
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Typography variant="h5" component="h4" align="center" gutterBottom>{title}</Typography>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const topGradientRef = useRef();

  return (
    <main>
      {/* <FadeBox
        childRef={topGradientRef}
      >
        <div
          ref={topGradientRef}
          className={styles.bgYellowGradient}
        />
      </FadeBox> */}
      <FadeBox
        childRef={topGradientRef}
      >
        <img
          ref={topGradientRef}
          src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&w=1000&q=80"
          className={styles.bgImg}
        />
      </FadeBox>
      <Box height="15rem"/>
      <ParallaxBox 
        triggerPoint={0} 
        yOffset={200}
        easing={[0.33, 1, 0.68, 1]}
      >
        <div className={styles.heroBanner}>
          <Typography variant="h1" component="h1" align="center" gutterBottom>{siteConfig.title}</Typography>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </ParallaxBox>
      <Box height="20rem"/>
      <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
      <Box height="5rem"/>
      {/* <motion.img
        ref={ref}
        className={styles.bgImg}
        src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&w=1000&q=80"
        alt="gradient"
        style={{ opacity, top: "50%" }}
      /> */}
      <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
      <Box height="5rem"/>
      <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
      <Box height="5rem"/>
      <IntersectionObserver>
        <ScaleBox>
          <Typography variant="h2" component="h2" align="center" gutterBottom>Our Team!</Typography>
        </ScaleBox>
      </IntersectionObserver>
      <IntersectionObserver>
        {features && features.length > 0 && (
          <ScaleBox>
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          </ScaleBox>
        )}
      </IntersectionObserver>
      <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
      <Box height="5rem"/>
      <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
      <Box height="5rem"/>
    </main>
  );
}

export default Home;
