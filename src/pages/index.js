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
  CardContent, 
  Button, 
  CardMedia,
  Container
} from '@material-ui/core';

import {
  ParallaxBox,
  IntersectionObserver,
  ScaleBox,
  FadeBox,
} from '../components'
import Icon from "@material-ui/core/Icon";
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleIcon from '@material-ui/icons/People';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CreateIcon from '@material-ui/icons/Create';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

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
    icon: <ExploreIcon style={{fontSize: '45px', fill: "black"}}/>, 
  },
  {
    title: 'POVs & Prototyping',
    linkTo: '/docs/pov-and-experience-prototyping',
    contentTitle: 'Presentation:',
    presentationGoogle: 'Slides',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSKZ1Y48CPC1z6i__WhkrksVQELiEe74JnfkQgiLajUwP2r4JXUlhMIHHd-aNvEuCpTUiUnxYPXCUG7/pub?start=false&loop=false&delayms=30000",
    pdfLink: 'assets/Assignment-2-Prototyping.pdf',
    icon: <PeopleIcon style={{fontSize: '45px', fill: "black"}}/>,
  },
  {
    // title: 'Concept Video',
    // linkTo: '/docs/concept-video',
    // presentationGoogle: 'Watch',
    // contentTitle: 'Video:',
    // presentationGoogleLink: 'assets/concept-video-compressed.mp4',
    // presentationGoogle: 'Watch',
    // contentTitle: 'Video:',
    // presentationGoogleLink: 'assets/concept-video-compressed.mp4',

    title: 'Concept Video',
    linkTo: '/docs/concept-video',
    contentTitle: 'Presentation:',
    secondRowTitle: 'Video:',
    secondRowContent: 'Watch ',
    presentationGoogle: 'Slides',
    reportLink: 'assets/concept-video-compressed.mp4',
    pdfLink: 'assets/Assignment-3-Concept-Video.pdf',
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vTJwx_QP3RxM-eR4Hhol-XF56YwjdZPDbe_yGxCtxrc3UEVFqZ6J4qmNdCetdZpABWW2Wu8ykt-OjBM/embed?start=true&loop=false&delayms=3000",
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
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vQK4PE-BI_h8kI89HMXFx5XMDSa2ybSwd1cB1j7R4jGugiufNHyERVXYmB-8WW6ARsF6yLn9DSTFnE5/pub?start=false&loop=false&delayms=30000",
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
    presentationGoogleLink: 'https://docs.google.com/presentation/d/e/2PACX-1vQKDslGJ1R7nP5LD7F0EOcfaZrBNdqpU0CDSwRYskd4um_aZxTReS0hcvzsh2xoUoBqwteJJS3ZRrwh/pub?start=false&loop=false&delayms=30000',
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
    presentationGoogleLink: "https://docs.google.com/presentation/d/e/2PACX-1vSDjHpOQfFkacNDTo5_19kzk4qtBXqKptnpYgIkVbBrEtE2SOpPbbIYV98Pz0NLogoqkcnqJwKx9Jbh/pub?start=false&loop=false&delayms=30000",
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


function Feature({imageUrl, title, descriptionA, descriptionB, delay, linkTo, secondRowContent, reportLink, secondRowTitle, contentTitle, presentationGoogle, presentationGoogleLink, pdfLink, thirdRowContent, thirdRowTitle, invisionLink, readmeLink, icon}) {
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
            <div>
            <CardContent className={styles.assignmentCardContent} style={{backgroundImage: "url(img/orb3.png)", backgroundRepeat: "no-repeat", backgroundPosition:"center", backgroundSize:"110%", justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}} >
            <Link to={linkTo}>
              <CardHeader
                title = {title}
                titleTypographyProps={{align: "center"}}
                className={styles.assignmentCardTitle}
              />
              </Link>
              {icon}
              {/* <ExploreIcon style={{fontSize: '45px'}}/> */}
              {/* <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center', fontSize: 10}}>
                {
                    contentTitle === 'Video:' || contentTitle === 'Report:' ?
                    <Typography variant='caption'>
                    {contentTitle} {<a href={presentationGoogleLink} style={{fontWeight:'bold', fontSize: 10}}>{presentationGoogle}</a>} 
                  </Typography>
                    :
                  <Typography variant='caption'>
                    {contentTitle} {<a href={presentationGoogleLink} style={{fontWeight:'bold', fontSize: 10}}>{presentationGoogle}</a>} | {<a href={pdfLink} style={{fontWeight:'bold'}}>PDF</a>}
                  </Typography>
                }
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                {
                  secondRowTitle ?
                  <Typography variant='caption'>
                  {secondRowTitle} {<a href={reportLink} style={{fontWeight:'bold', fontSize: 10}}>{secondRowContent}</a>} 

                  {readmeLink ?  <span>|<a href={readmeLink} style={{fontWeight:'bold', fontSize: 10}}>{thirdRowContent}</a></span>  : ""}

                </Typography>
                  :
                  "" 
                }
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                {
                  thirdRowTitle ?
                  <Typography variant='caption'>
                  {thirdRowTitle} {<a href={invisionLink} style={{fontWeight:'bold', fontSize: 10}}>{thirdRowContent}</a>} 

                </Typography>
                  :
                  "" 
                }
              </div> */}
              
              </CardContent>


              <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
              {
                  contentTitle === 'Video:' || contentTitle === 'Report:' ?
                  <Typography variant="subtitle1">
                  {contentTitle} {<a href={presentationGoogleLink} style={{fontWeight:'bold', fontSize: 16}}>{presentationGoogle}</a>} 
                </Typography>
                  :
                <Typography variant="subtitle1">
                  {contentTitle} {<a href={presentationGoogleLink} style={{fontWeight:'bold', fontSize: 16}}>{presentationGoogle}</a>} | {<a href={pdfLink} style={{fontWeight:'bold'}}>PDF</a>}
                </Typography>
              }
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
              {
                secondRowTitle ?
                <Typography variant="subtitle1">
                {secondRowTitle} {<a href={reportLink} style={{fontWeight:'bold', fontSize: 16}}>{secondRowContent}</a>} 

                {readmeLink ?  <span>|<a href={readmeLink} style={{fontWeight:'bold', fontSize: 16}}>{thirdRowContent}</a></span>  : ""}

              </Typography>
                :
                "" 
              }
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
              {
                thirdRowTitle ?
                <Typography>
                {thirdRowTitle} {<a href={invisionLink} style={{fontWeight:'bold', fontSize: 16}}>{thirdRowContent}</a>} 

              </Typography>
                :
                "" 
              }
            </div>
            </div>

             
            
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

  const [windowHeight, setWindowHeight] = useState(900);

  const [chosen, setChosen] = useState(1);

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
                  src={useBaseUrl('img/voicesLogo.png')}
                  width={"40%"}
                />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
              </div>
            </ParallaxBox>
          </Box>

          {/* <div className={styles.videoFrame}>
            <iframe width="640" height="360" src="https://www.youtube.com/embed/cvilv2km4kE" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen className={styles.video}></iframe>
          </div> */}

          <div className={styles.videoFrame}> 
            <video width="640" height="360" controls className={styles.video}>
              <source src={useBaseUrl("assets/concept-video-compressed.mp4")} type="video/mp4"/>
            </video>

            <Box>
                <form action="https://www.youtube.com/embed/cvilv2km4kE" style={{display:"inline"}}>
                <Button type="submit" variant="contained" style={{backgroundColor: "#25c2a0", color: "white", fontWeight: 800, width: '10%', fontSize: 12, borderRadius: 25}}>
                  Watch on Youtube
                </Button>
                </form>
                <form method="get" action={useBaseUrl("assets/concept-video-compressed.mp4")} style={{display:"inline"}}>
                <Button type="submit" variant="contained" style={{backgroundColor: "#25c2a0", color: "white", fontWeight: 800, width: '10%', fontSize: 12, borderRadius: 25, margin: '1%'}}>
                  Download
                </Button>
                </form>
          </Box>
          </div>

          <Box>
          <img src={"img/newest_version.png"} style={{maxHeight: '400px', marginLeft: '20%', marginTop:"10%", overflow:'hidden', display: 'inline'}}/>
        
          </Box>

          {/* <div className={styles.videoFrame} style={{backgroundImage: "url(img/plain_orb.png)", backgroundRepeat: "no-repeat", backgroundPosition:"center", backgroundSize:"110%", justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}> 
            <video width="426" height="240" controls className={styles.video}>
              <source src={useBaseUrl("assets/concept-video-compressed.mp4")} type="video/mp4"/>
            </video>
          </div> */}

          <Box>
          <img src={"img/next_orb.png"} style={{maxHeight: '400px', marginLeft: '55%'}}/>
          </Box>

          <Box>
          <img src={"img/final_orb.png"} style={{maxHeight: '400px', marginLeft: '30%', marginBottom: "10%"}}/>
          </Box>
          
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly"}}>
            <Box style={{marginLeft: '10%', marginTop: '8%'}}>
              <Typography variant="h2" component="h2" align="left" gutterBottom style={{fontWeight: 800}}>
                Explore voices everywhere 
              </Typography>
              <Box>
              <form action='https://www.figma.com/proto/d1azqt8OHaDjVIs11hnwG9/Full-Medium-Fi-Prototype?node-id=88%3A9695&scaling=scale-down'>
                <Button type="submit" variant="contained" style={{backgroundColor: "#25c2a0", color: "white", fontWeight: 800, width: '33%', fontSize: 18, borderRadius: 25}}>
                  Try our prototype
                </Button>
              </form>
                {/* <Button variant="contained" style={{backgroundColor: "#25c2a0", color: "white", fontWeight: 800, width: '33%', fontSize: 18, borderRadius: 25}} >
                  Try our prototype
                </Button> */}
              </Box>
            </Box>
            <Box>
            <img src={"img/demo.png"} size="large" style={{maxHeight: '550px', marginLeft: "-20%"}}/>
            </Box>
          </Box>

          {/* <Typography>
            Try our prototype
          </Typography> */}

          {/* <Box height="400px" className="mainIframeContainer" align="center">
          <iframe width="40" height="475" 
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fd1azqt8OHaDjVIs11hnwG9%2FFull-Medium-Fi-Prototype%3Fscaling%3Dmin-zoom%26node-id%3D88%253A9695" allowfullscreen></iframe>
          </Box> */}
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
            {/* <Box style={{display:"flex", flexDirection: 'row', justifyContent: "space-evenly", marginLeft: '10%', marginRight: '10%'}}>
            <Button variant="outlined" style={{borderColor: "#25c2a0", border:"2 solid #25c2a0", backgroundColor: "white", borderWidth: 2, color: "black", fontWeight: 500, fontSize: 14, borderRadius: 15}} onClick={()=> setChosen(1)}>Needfinding</Button>
            <Button variant="outlined" style={{borderColor: "#25c2a0", border:"2 solid #25c2a0", backgroundColor: "white", borderWidth: 2, color: "black", fontWeight: 500, fontSize: 14, borderRadius: 15}} onClick={()=> setChosen(2)}>Needfinding</Button>
            <Button variant="outlined" style={{borderColor: "#25c2a0", border:"2 solid #25c2a0", backgroundColor: "white", borderWidth: 2, color: "black", fontWeight: 500, fontSize: 14, borderRadius: 15}} onClick={()=> setChosen(1)}>Needfinding</Button>
            <Button variant="outlined" style={{borderColor: "#25c2a0", border:"2 solid #25c2a0", backgroundColor: "white", borderWidth: 2, color: "black", fontWeight: 500, fontSize: 14, borderRadius: 15}}>Needfinding</Button>
            <Button variant="outlined" style={{borderColor: "#25c2a0", border:"2 solid #25c2a0", backgroundColor: "white", borderWidth: 2, color: "black", fontWeight: 500, fontSize: 14, borderRadius: 15}}>Needfinding</Button>
            <Button variant="outlined" style={{borderColor: "#25c2a0", border:"2 solid #25c2a0", backgroundColor: "white", borderWidth: 2, color: "black", fontWeight: 500, fontSize: 14, borderRadius: 15}}>Needfinding</Button>
            <Button variant="outlined" style={{borderColor: "#25c2a0", border:"2 solid #25c2a0", backgroundColor: "white", borderWidth: 2, color: "black", fontWeight: 500, fontSize: 14, borderRadius: 15}}>Needfinding</Button>
            <Button variant="outlined" style={{borderColor: "#25c2a0", border:"2 solid #25c2a0", backgroundColor: "white", borderWidth: 2, color: "black", fontWeight: 500, fontSize: 14, borderRadius: 15}}>Needfinding</Button>
            </Box> */}

          </Box>
          <Box height="200px"/>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
