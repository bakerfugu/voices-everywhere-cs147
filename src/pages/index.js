import React, { useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {
  Typography,
  Box,
  Card,
  CardHeader,
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

const assignmentLinksFirstRow = [
  {
    title: 'Needfinding',
    linkTo: '/docs/needfinding'
  },
  {
    title: 'POVs & Prototyping',
    linkTo: '/docs/pov-and-experience-prototyping'
  },
  {
    title: 'Concept Video',
    linkTo: '/docs/concept-video'
  },
  {
    title: 'Low-fi Prototype',
    linkTo: '/docs/low-fi-prototype-and-test'
  },
];
const assignmentLinksSecondRow = [
  {
    title: 'Med-fi Prototype',
    linkTo: '/docs/medium-fi-prototype'
  },
  {
    title: 'Group HE',
    linkTo: '/docs/group-heuristic-evaluation'
  },
  {
    title: 'Final Prototype',
    linkTo: '/docs/high-fidelity-prototype'
  },
  {
    title: 'Poster & Pitch',
    linkTo: '/docs/poster-and-pitch-slide'
  },
];

function Feature({imageUrl, title, description, delay, linkTo}) {
  const imgUrl = useBaseUrl(imageUrl);
  const featureContents = (
    <div>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Typography variant="h5" component="h4" align="center" gutterBottom>{title}</Typography>
      {description && 
        <p>{description}</p>
      }
    </div>
  )
  return (
    <div className={clsx('col col--3', styles.feature)}>
      { delay ?
          <ScaleBox delayOrder={delay}>
            {featureContents}
          </ScaleBox>
        : linkTo ? 
          <Link to={linkTo}>
            <Card>
              <CardHeader
                title={title}
                titleTypographyProps={{align: "center"}}
              />
            </Card>
          </Link>
        :
        {featureContents}
      }
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const topGradientRef = useRef();
  const firstTransitionRange = [0, window.innerHeight/3]

  return (
    <main>
      <div
        className={styles.backgroundContainer}
      >
        <FadeBox
          childRef={topGradientRef}
          scrollInputRange={firstTransitionRange}
          opacityOutputRange={[1, 0]}
        >
          <div
            ref={topGradientRef}
            className={styles.bgYellowGradient}
          />
        </FadeBox>
        <FadeBox
          childRef={topGradientRef}
          scrollInputRange={[...firstTransitionRange, window.innerHeight+400,window.innerHeight+600]}
          opacityOutputRange={[0.2, 0.8, 0.8, 0]}
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
        <Box 
          height={`${window.innerHeight}px`}
          className={styles.heroContainer}
        >
          <ParallaxBox 
            yRange={firstTransitionRange}
            easing={[0.5, 0, 0.75, 0]}
          >
            <div className={styles.heroBanner}>
              <Typography variant="h1" component="h1" align="center" gutterBottom>{siteConfig.title}</Typography>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
          </ParallaxBox>
        </Box>
        <Box height="400px"/>
        <Box height="400px">
          <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
        </Box>
        <Box height="400px">
          <Typography variant="h2" component="h2" align="center" gutterBottom>ABC!</Typography>
        </Box>
        <Box>
          <Typography variant="h2" component="h2" align="center" gutterBottom>Our Team!</Typography>
          {features && features.length > 0 && (
            <IntersectionObserver>
              <section className={styles.features}>
                <div className="container">
                  <div className="row">
                    {features.map((props, idx) => (
                      <Feature key={idx} delay={idx + 1} {...props} />
                    ))}
                  </div>
                </div>
              </section>
            </IntersectionObserver>
          )}
        </Box>
        <Box height="200px"/>
        <Box>
          <Typography variant="h2" component="h2" align="center" gutterBottom>Our Journey</Typography>
          {assignmentLinksFirstRow && assignmentLinksFirstRow.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {assignmentLinksFirstRow.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
          {assignmentLinksSecondRow && assignmentLinksSecondRow.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {assignmentLinksSecondRow.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </Box>
        <Box height="200px"/>
      </div>
    </main>
  );
}

export default Home;
