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
  CardContent
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
    descriptionA: "UI/UX Designer",
    descriptionB: "Researcher"
  },
  {
    title: 'Baker Sharp',
    imageUrl: 'img/baker-face.png',
    descriptionA: "Lead Web Developer",
  },
  {
    title: 'Krishnan Nair',
    imageUrl: 'img/krishnan-face.png',
    descriptionA: "Lead Mobile Developer",
  },
  {
    title: 'Taylor Lallas',
    imageUrl: 'img/taylor-face.png',
    descriptionA: "UI/UX Designer",
    descriptionB: "Developer",
  },
];

const assignmentLinksFirstRow = [
  {
    title: 'Needfinding',
    linkTo: '/docs/needfinding',
    presentationGoogle: 'Slides',
    contentTitle: 'Presentation:',
    pdfLink: 'assets/Needfinding-Presentation.pdf',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
  },
  {
    title: 'POVs & Prototyping',
    linkTo: '/docs/pov-and-experience-prototyping',
    contentTitle: 'Presentation:',
    presentationGoogle: 'Slides',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSKZ1Y48CPC1z6i__WhkrksVQELiEe74JnfkQgiLajUwP2r4JXUlhMIHHd-aNvEuCpTUiUnxYPXCUG7/pub?start=false&loop=false&delayms=30000",
    pdfLink: 'assets/Assignment-2-Prototyping.pdf'
  },
  {
    title: 'Concept Video',
    linkTo: '/docs/concept-video',
    presentationGoogle: 'Watch',
    contentTitle: 'Video:',
    presentationGoogleLink: 'assets/concept-video-compressed.mp4',
  },
  {
    title: 'Low-fi Prototype',
    linkTo: '/docs/low-fi-prototype-and-test',
    contentTitle: 'Presentation:',
    reportLink: 'assets/Low-Fi-Prototyping-Report.pdf',
    secondRowTitle: 'Report:',
    secondRowContent: 'PDF',
    presentationGoogle: 'Slides',
    thirdRowTitle: 'Prototype:',
    thirdRowContent: 'Invision',
    invisionLink: 'https://projects.invisionapp.com/share/AP105Q3ADW7G#/screens',
    pdfLink: 'assets/Low-Fi-Protoype-Presentation.pdf',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vQK4PE-BI_h8kI89HMXFx5XMDSa2ybSwd1cB1j7R4jGugiufNHyERVXYmB-8WW6ARsF6yLn9DSTFnE5/pub?start=false&loop=false&delayms=30000",
  },
];
const assignmentLinksSecondRow = [
  {
    title: 'Med-fi Prototype',
    linkTo: '/docs/medium-fi-prototype',
    contentTitle: 'Presentation:',
    presentationGoogle: 'Slides',
    secondRowTitle: 'Prototype:',
    secondRowContent: 'Figma ',
    reportLink: 'https://www.figma.com/proto/d1azqt8OHaDjVIs11hnwG9/Full-Medium-Fi-Prototype?scaling=scale-down&node-id=88%3A9695',
    pdfLink: 'assets/Med-Fi-Prototype.pdf',
    presentationGoogleLink: 'https://docs.google.com/presentation/d/e/2PACX-1vQKDslGJ1R7nP5LD7F0EOcfaZrBNdqpU0CDSwRYskd4um_aZxTReS0hcvzsh2xoUoBqwteJJS3ZRrwh/pub?start=false&loop=false&delayms=30000',
    thirdRowContent: ' README',
    readmeLink: 'assets/README.pdf'
  },
  {
    title: 'Heuristic Eval',
    linkTo: '/docs/group-heuristic-evaluation',
    contentTitle: 'Report:',
    presentationGoogle: 'PDF',
    presentationGoogleLink: "assets/voices-group-he.pdf",
  },
  {
    title: 'Final Prototype',
    linkTo: '/docs/high-fidelity-prototype',
    contentTitle: 'Presentation:',
    presentationGoogle: 'Slides',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSDjHpOQfFkacNDTo5_19kzk4qtBXqKptnpYgIkVbBrEtE2SOpPbbIYV98Pz0NLogoqkcnqJwKx9Jbh/pub?start=false&loop=false&delayms=30000",
  },
  {
    title: 'Poster & Pitch',
    linkTo: '/docs/poster-and-pitch-slide',
    contentTitle: 'Presentation:',
    presentationGoogle: 'Slides',
    presentationGoogleLink: "",
  },
];


function Feature({imageUrl, title, descriptionA, descriptionB, delay, linkTo, secondRowContent, reportLink, secondRowTitle, contentTitle, presentationGoogle, presentationGoogleLink, pdfLink, thirdRowContent, thirdRowTitle, invisionLink, readmeLink}) {
  const imgUrl = useBaseUrl(imageUrl);
  const featureContents = (
    <div>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Typography variant="h5" component="h4" align="center" gutterBottom>{title}</Typography>
        <div style={{textAlign:'center', alignItems: 'center'}}>
        <span>{descriptionA}         
        {
          descriptionB ?
            <span><span style={{fontWeight: '800', color: '#1DDBB5'}}> x </span>{descriptionB} </span>
          :
          ""
        }</span> 
        </div>
    </div>
  )
  return (
    <div className={clsx('col col--3', styles.feature)}>
      { delay ?
          <ScaleBox delayOrder={delay}>
            {featureContents}
          </ScaleBox>
        : linkTo ? 
            <Card className={styles.assignmentCard}>
              <CardContent className={styles.assignmentCardContent}>
            <Link to={linkTo}>
              <CardHeader
                title = {title}
                titleTypographyProps={{align: "center", noWrap: 'true'}}
                className={styles.assignmentCardTitle}
              />
              </Link>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                {
                    contentTitle === 'Video:' || contentTitle === 'Report:' ?
                    <Typography>
                    {contentTitle} {<a href={presentationGoogleLink} style={{fontWeight:'bold'}}>{presentationGoogle}</a>} 
                  </Typography>
                    :
                  <Typography>
                    {contentTitle} {<a href={presentationGoogleLink} style={{fontWeight:'bold'}}>{presentationGoogle}</a>} | {<a href={pdfLink} style={{fontWeight:'bold'}}>PDF</a>}
                  </Typography>
                }
              </div>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                {
                  secondRowTitle ?
                  <Typography>
                  {secondRowTitle} {<a href={reportLink} style={{fontWeight:'bold'}}>{secondRowContent}</a>} 

                  {readmeLink ?  <span>|<a href={readmeLink} style={{fontWeight:'bold'}}>{thirdRowContent}</a></span>  : ""}

                </Typography>
                  :
                  "" 
                }
              </div>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                {
                  thirdRowTitle ?
                  <Typography>
                  {thirdRowTitle} {<a href={invisionLink} style={{fontWeight:'bold'}}>{thirdRowContent}</a>} 

                </Typography>
                  :
                  "" 
                }
              </div>
              
              </CardContent>
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
          <Box boxShadow={5} height="700px" style={{paddingTop: '3%', paddingBottom: '3%', backgroundColor: 'rgba(253,240,175,1)'}}>
            <Box style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
              <Box boxShadow={5} style={{padding: '1%', backgroundColor: 'white'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography variant="h2" component="h2" align="left" style={{fontWeight: 'bold'}} gutterBottom>explore</Typography>
                  <img src={'img/explore.JPG'} style={{maxHeight: '500px'}}/>
                </div>
              </Box>
            <Box boxShadow={5} style={{padding: '1%', backgroundColor: 'white'}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h2" component="h2" align="center" style={{fontWeight: 'bold'}} gutterBottom>listen</Typography>
                <img src={'img/Listen.JPG'} style={{maxHeight: '500px'}}/>
              </div>
            </Box>
            <Box boxShadow={5} style={{padding: '1%', backgroundColor: 'white'}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h2" component="h2" align="right" style={{fontWeight: 'bold'}} gutterBottom>share</Typography>
                <img src={'img/record.JPG'} style={{maxHeight: '500px'}}/>
              </div>
           </Box>
            </Box>

          </Box>
          <Box style={{paddingTop: '5%'}}>
            <Typography variant="h2" component="h2" align="center" gutterBottom>Our Team</Typography>
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
