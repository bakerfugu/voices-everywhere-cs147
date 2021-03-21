import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Typography, CardHeader, CardContent } from "@material-ui/core";
import { ScaleBox } from "../../components";
import { LinkRow } from "./linkRow";

import styles from "./styles.module.css";

export function Feature({
  imageUrl,
  title,
  descriptionA,
  descriptionB,
  delay,
  linkTo,
  secondRowContent,
  reportLink,
  secondRowTitle,
  contentTitle,
  presentationGoogle,
  presentationGoogleLink,
  pdfLink,
  thirdRowContent,
  thirdRowTitle,
  invisionLink,
  readmeLink,
  secondRowOtherContent,
  icon,
}) {
  const imgUrl = useBaseUrl(imageUrl);
  const featureContents = (
    <div>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Typography variant="h5" component="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <span>
          {descriptionA}
          {descriptionB ? (
            <span>
              <span style={{ fontWeight: "800", color: "#1DDBB5" }}> x </span>
              {descriptionB}{" "}
            </span>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
  // if (linkTo) console.log('title:', title);
  return (
    <div className={clsx("col col--3", styles.feature)}>
      {delay ? (
        <ScaleBox delayOrder={delay}>{featureContents}</ScaleBox>
      ) : linkTo ? (
        <div>
          <CardContent
            className={styles.assignmentCardContent}
            style={{
              backgroundImage: "url(img/orb3.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "110%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link to={linkTo}>
              <CardHeader
                title={title}
                titleTypographyProps={{ align: "center" }}
                className={styles.assignmentCardTitle}
              />
            </Link>
            {icon}
          </CardContent>
          <LinkRow
            firstWord={contentTitle}
            secondWord={presentationGoogle}
            secondWordLink={presentationGoogleLink}
            thirdWord={"PDF"}
            thirdWordLink={pdfLink}
          />
          {secondRowTitle && (
            <LinkRow
              firstWord={secondRowTitle}
              secondWord={secondRowContent}
              secondWordLink={reportLink}
              thirdWord={secondRowOtherContent}
              thirdWordLink={readmeLink}
            />
          )}
          {thirdRowTitle && (
            <LinkRow
              firstWord={thirdRowTitle}
              secondWord={thirdRowContent}
              secondWordLink={invisionLink}
            />
          )}
        </div>
      ) : (
        { featureContents }
      )}
    </div>
  );
}
