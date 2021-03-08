import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import {
  Typography,
  Box,
  Card,
  CardHeader,
} from '@material-ui/core';

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
    linkTo: '/docs/needfinding',
    presentationGoogle: 'Needfinding Slides',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
  },
  {
    title: 'POVs & Prototyping',
    linkTo: '/docs/pov-and-experience-prototyping',
    presentationGoogle: 'Experience Prototyping Slides',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
  },
  {
    title: 'Concept Video',
    linkTo: '/docs/concept-video',
    presentationGoogle: 'Concept Video Slides',
    presentationGoogleLink: 'https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000',
  },
  {
    title: 'Low-fi Prototype',
    linkTo: '/docs/low-fi-prototype-and-test',
    presentationGoogle: 'Low-Fi Prototype Slides)',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
  },
];
const assignmentLinksSecondRow = [
  {
    title: 'Med-fi Prototype',
    linkTo: '/docs/medium-fi-prototype',
    presentationGoogle: 'Med-Fi Prototype Slides',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
  },
  {
    title: 'Group HE',
    linkTo: '/docs/group-heuristic-evaluation',
    presentationGoogle: 'Presentation (Google Docs)',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
  },
  {
    title: 'Final Prototype',
    linkTo: '/docs/high-fidelity-prototype',
    presentationGoogle: 'Presentation (Google Docs)',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
  },
  {
    title: 'Poster & Pitch',
    linkTo: '/docs/poster-and-pitch-slide',
    presentationGoogle: 'Presentation (Google Docs)',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
  },
];


function Feature({imageUrl, title, description, delay, linkTo, presentationGoogle, presentationGoogleLink}) {
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
            <Card>
            <Link to={linkTo}>
              <CardHeader
                title={title}
                titleTypographyProps={{align: "center"}}
              />
              </Link>
              <a href={presentationGoogleLink}>{presentationGoogle}</a>
            </Card>
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

  const [windowHeight, setWindowHeight] = useState(900)

  useEffect(() => {
    const changeWindowHeight = window ? window.innerHeight : 900;
    setWindowHeight(changeWindowHeight)
  }, [])

  const firstTransitionRange = [0, windowHeight/3]

  return (
    <Layout title={"voices"} description={"Cultural immersion by discovering personal stories."}>
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
            scrollInputRange={[...firstTransitionRange, windowHeight+400,windowHeight+600]}
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
            height={`${windowHeight}px`}
            className={styles.heroContainer}
          >
            <ParallaxBox 
              yRange={firstTransitionRange}
              easing={[0.5, 0, 0.75, 0]}
            >
              <div className={styles.heroBanner}>
                <img
                  alt="Voices text logo"
                  src={useBaseUrl('img/voicesTextLogo.png')}
                  width={"40%"}
                />
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
    </Layout>
  );
}

export default Home;
