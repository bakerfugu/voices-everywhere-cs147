import React, { useRef } from 'react';
import clsx from 'clsx';
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
  const firstTransitionRange = [0, 300]

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
      <div
        className={styles.backgroundContainer}
      >
        <FadeBox
          childRef={topGradientRef}
          scrollInputRange={firstTransitionRange}
          opacityOutputRange={[0.2, 0.8]}
        >
          <img
            ref={topGradientRef}
            src={useBaseUrl("img/Maps-Big-Screenshot-ColorFaded.png")}
            className={styles.bgImg}
          />
        </FadeBox>
      </div>
      <div
        className={styles.contentContainer}
      >
        <Box height="15rem"/>
        <ParallaxBox 
          yRange={firstTransitionRange}
          easing={[0.5, 0, 0.75, 0]}
        >
          <div className={styles.heroBanner}>
            <Typography variant="h1" component="h1" align="center" gutterBottom>{siteConfig.title}</Typography>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </ParallaxBox>
        <Box height="20rem"/>
        <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
        <Box height="5rem"/>
        <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
        <Box height="5rem"/>
        <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
        <Box height="5rem"/>
        <Box>
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
        </Box>
        <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
        <Box height="5rem"/>
        <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
        <Box height="5rem"/>
      </div>
    </main>
  );
}

export default Home;
