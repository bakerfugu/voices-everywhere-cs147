import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  Typography,
  CardHeader,
  CardContent, 
} from '@material-ui/core';
import {
  ScaleBox,
} from '../../components'

import styles from './styles.module.css';

export function Feature({imageUrl, title, descriptionA, descriptionB, delay, linkTo, secondRowContent, reportLink, secondRowTitle, contentTitle, presentationGoogle, presentationGoogleLink, pdfLink, thirdRowContent, thirdRowTitle, invisionLink, readmeLink, icon}) {
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
          </CardContent>
          <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            { contentTitle === 'Video:' || contentTitle === 'Report:' ?
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
            { secondRowTitle ?
              <Typography variant="subtitle1">
                {secondRowTitle} {<a href={reportLink} style={{fontWeight:'bold', fontSize: 16}}> {secondRowContent} </a>} 

                {readmeLink ?  <span> | <a href={readmeLink} style={{fontWeight:'bold', fontSize: 16}}> {thirdRowContent} </a></span>  : ""}
              </Typography>
            :
              ""
            }
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            { thirdRowTitle ?
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