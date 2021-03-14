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
  Button, 
} from '@material-ui/core';
import {
  ParallaxBox,
  IntersectionObserver,
  Feature,
  FadeBox,
  ScaleBox,
} from '../components'
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleIcon from '@material-ui/icons/People';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CreateIcon from '@material-ui/icons/Create';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import { TrainRounded } from '@material-ui/icons';
import { StoryOrb } from '../components/story-orb';

const features = [
  {
    title: 'Ayelet D',
    imageUrl: 'img/ayelet-face.png',
    descriptionA: "UI/UX Designer",
    descriptionB: "Researcher"
  },
  {
    title: 'Baker S',
    imageUrl: 'img/baker-face.png',
    descriptionA: "Lead Web Developer",
  },
  {
    title: 'Krishnan N',
    imageUrl: 'img/krishnan-face.png',
    descriptionA: "Lead Mobile Developer",
  },
  {
    title: 'Taylor L',
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
    presentationGoogleLink: "assets/Assignment-1-Needfinding.pptx", 
    //presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSFZ-Bbo51DCxwaYvyaR5cs9vYJ899ftWpomf6KkOhsACTS7Zo3R7xGmz3NSJ3TK1WYf8t5S_exNgNZ/embed?start=false&loop=false&delayms=60000",
    icon: <ExploreIcon style={{fontSize: '45px', fill: "black"}}/>, 
  },
  {
    title: 'POVs & Prototyping',
    linkTo: '/docs/pov-and-experience-prototyping',
    contentTitle: 'Presentation:',
    presentationGoogle: 'Slides',
    presentationGoogleLink: "assets/Assignment-2-Prototyping.pptx", 
    //presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSKZ1Y48CPC1z6i__WhkrksVQELiEe74JnfkQgiLajUwP2r4JXUlhMIHHd-aNvEuCpTUiUnxYPXCUG7/pub?start=false&loop=false&delayms=30000",
    pdfLink: 'assets/Assignment-2-Prototyping.pdf',
    icon: <PeopleIcon style={{fontSize: '45px', fill: "black"}}/>,
  },
  {
    title: 'Concept Video',
    linkTo: '/docs/concept-video',
    contentTitle: 'Presentation:',
    secondRowTitle: 'Video:',
    secondRowContent: 'Watch ',
    presentationGoogle: 'Slides',
    reportLink: 'assets/concept-video-compressed.mp4',
    pdfLink: 'assets/Assignment-3-Concept-Video.pdf',
    presentationGoogleLink: "assets/Assignment-3-Concept-Video.pptx", 
    //presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vTJwx_QP3RxM-eR4Hhol-XF56YwjdZPDbe_yGxCtxrc3UEVFqZ6J4qmNdCetdZpABWW2Wu8ykt-OjBM/embed?start=true&loop=false&delayms=3000",
    icon: <MovieCreationIcon style={{fontSize: '45px', fill: "black"}}/>,
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
    presentationGoogleLink: "assets/Assignment-5-Low-Fi-Protoype.pptx", 
    //presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vQK4PE-BI_h8kI89HMXFx5XMDSa2ybSwd1cB1j7R4jGugiufNHyERVXYmB-8WW6ARsF6yLn9DSTFnE5/pub?start=false&loop=false&delayms=30000",
    icon: <CreateIcon style={{fontSize: '45px', fill: "black"}}/>,
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
    presentationGoogleLink: "assets/Assignment-6-Med-Fi-Prototype.pptx",
    //presentationGoogleLink: 'https://docs.google.com/presentation/d/e/2PACX-1vQKDslGJ1R7nP5LD7F0EOcfaZrBNdqpU0CDSwRYskd4um_aZxTReS0hcvzsh2xoUoBqwteJJS3ZRrwh/pub?start=false&loop=false&delayms=30000',
    thirdRowContent: ' README',
    readmeLink: 'assets/README.pdf',
    icon: <AccountTreeIcon style={{fontSize: '45px', fill: "black"}}/>,
  },
  {
    title: 'Heuristic Evaluation',
    linkTo: '/docs/group-heuristic-evaluation',
    contentTitle: 'Report:',
    presentationGoogle: 'PDF',
    presentationGoogleLink: "assets/voices-group-he.pdf",
    icon: <AssignmentIcon style={{fontSize: '45px', fill: "black"}}/>,
  },
  {
    title: 'Final Prototype',
    linkTo: '/docs/high-fidelity-prototype',
    contentTitle: 'Presentation:',
    presentationGoogle: 'Slides',
    presentationGoogleLink: 'assets/Assignment-8-Hi-Fi-Prototype.pptx', 
    secondRowContent: 'PDF',
    pdfLink: 'assets/Assignment-8-Hi-Fi-Prototype.pdf',
    //presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSDjHpOQfFkacNDTo5_19kzk4qtBXqKptnpYgIkVbBrEtE2SOpPbbIYV98Pz0NLogoqkcnqJwKx9Jbh/pub?start=false&loop=false&delayms=30000",
    icon: <PhoneIphoneIcon style={{fontSize: '45px', fill: "black"}}/>,
  },
  {
    title: 'Poster & Pitch',
    linkTo: '/docs/poster-and-pitch-slide',
    contentTitle: 'Presentation:',
    presentationGoogle: 'Slides',
    presentationGoogleLink: "",
    icon: <ImportantDevicesIcon style={{fontSize: '45px'}}/>,
  },
];


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const topGradientRef = useRef();
  const [windowHeight, setWindowHeight] = useState(900);
  // const [windowWidth, setWindowWidth] = useState(1400);

  useEffect(() => {
    const changeWindowHeight = window ? window.innerHeight : 900;
    // const changeWindowWidth = window ? window.innerWidth : 1400;
    setWindowHeight(changeWindowHeight);
    // setWindowHeight(changeWindowWidth);
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
            scrollInputRange={[...firstTransitionRange, windowHeight+100, windowHeight+400]}
            opacityOutputRange={[0.2, 0.9, 0.9, 0.2]}
          >
            <img
              ref={topGradientRef}
              src={useBaseUrl("img/Maps-Big-Screenshot-ColorFaded.png")}
              className={styles.bgImg}
            />
          </FadeBox>
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
                  src={useBaseUrl('img/voicesLogoFixed.png')}
                  width={"400px"}
                />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
              </div>
            </ParallaxBox>
          </Box>

          <Box height={`200px`}/>

          <Box height={`${windowHeight}px`}>
            <IntersectionObserver reset={true}>
              <StoryOrb className={styles.storyCrossroads}
                imageSource={'img/crossroadsThrift.png'}
                title={'Thrifting at Crossroads in the Fillmore'}
                oneImage
                audioFilePath={useBaseUrl('audio/crossroadsStory.mp3')}
              />
            </IntersectionObserver>
            <IntersectionObserver reset={true}>
              <StoryOrb className={styles.storyPOFA}
                imageSource={'img/pofa.png'}
                audioFilePath={useBaseUrl('audio/swans-at-the-palace.mp3')}
                title={'The Swans at the Palace of Fine Arts'}
                oneImage
              />
            </IntersectionObserver>
            <IntersectionObserver reset={true}>
              <StoryOrb className={styles.storyGoldenGate}
                imageSource={'img/golden-gate-bridge.png'}
                audioFilePath={useBaseUrl('audio/golden-gate-howl.mp3')}
                title={'Does the Golden Gate Bridge Howl?'}
                oneImage
              />
            </IntersectionObserver>
            <IntersectionObserver reset={true}>
              <StoryOrb className={styles.storyOceanBeach}
                imageSource={'img/ocean-beach-fog-burn.jpeg'}
                title={'Flying Discs at Ocean Beach\'s "Fog Burn"'}
                audioFilePath={useBaseUrl('audio/ocean-beach-fog-burn.mp3')}
              />
            </IntersectionObserver>
            <IntersectionObserver reset={true}>
              <StoryOrb className={styles.saintStupid}
                imageSource={'img/saint-stupid.jpeg'}
                title={'Saint Stupid\'s Parade on Market Street'}
                audioFilePath={useBaseUrl('audio/parade-krishnan.mp3')}
              />
            </IntersectionObserver>
          </Box>

          <Box height={`100px`}/>

          <Box className={styles.videoFrame}> 
            <video width="640" height="360" controls className={styles.video}>
              <source src={useBaseUrl("assets/concept-video-compressed.mp4")} type="video/mp4"/>
            </video>

            <Box>
              <form action="https://www.youtube.com/embed/cvilv2km4kE" style={{display:"inline"}}>
                <Button type="submit" variant="contained" style={{backgroundColor: "#25c2a0", color: "white", fontWeight: 800, width: '7%', fontSize: 12, borderRadius: 25}}>
                  YouTube
                </Button>
              </form>
              <form method="get" action={useBaseUrl("assets/concept-video-compressed.mp4")} style={{display:"inline"}}>
                <Button type="submit" variant="contained" style={{backgroundColor: "#25c2a0", color: "white", fontWeight: 800, width: '7%', fontSize: 12, borderRadius: 25, margin: '1%'}}>
                  Download
                </Button>
              </form>
            </Box>
          </Box>

          <Box>
            <img src={"img/exploring-new-cultures.png"} style={{maxHeight: '400px', marginLeft: '20%', marginTop:"10%", overflow:'hidden', display: 'inline'}}/>     
          </Box>
          <Box>
            <img src={"img/share-and-listen.png"} style={{maxHeight: '400px', marginLeft: '55%'}}/>
          </Box>
          <Box>
            <img src={"img/follow-the-voices.png"} style={{maxHeight: '400px', marginLeft: '33%', marginBottom: "10%"}}/>
          </Box>
          
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly"}}>
            <Box style={{marginLeft: '10%', marginTop: '8%'}}>
              <Typography variant="h2" component="h2" align="left" gutterBottom style={{fontWeight: 800}}>
                Explore voices everywhere 
              </Typography>
              <Box>
                {/* <form action='https://www.figma.com/proto/7b9U2zKH8v3bCp4Zlp6iau/PREVIEW-ONLY-FOR-SLIDES-DO-NOT-EDIT?node-id=88%3A9695&scaling=scale-down'> */}
                <a 
                  href="https://www.figma.com/proto/d1azqt8OHaDjVIs11hnwG9/Full-Medium-Fi-Prototype?node-id=88%3A9695&scaling=scale-down"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button type="submit" variant="contained" style={{backgroundColor: "#25c2a0", color: "white", fontWeight: 800, width: '33%', fontSize: 18, borderRadius: 25}}>
                    Try our prototype
                  </Button>
                </a>
                {/* </form> */}
              </Box>
            </Box>
            <Box>
              <img src={"img/demo.png"} size="large" style={{maxHeight: '550px', marginLeft: "-20%"}}/>
            </Box>
          </Box>

          <Box style={{paddingTop: '5%'}}>
            <Typography variant="h2" component="h2" align="center" gutterBottom>Our Team</Typography>
            {features && features.length > 0 && (
              <IntersectionObserver reset={true}>
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
