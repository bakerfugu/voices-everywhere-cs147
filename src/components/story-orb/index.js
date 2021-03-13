import React, { useState, useRef, useEffect, forwardRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useSound from 'use-sound';

import PauseButton from '@site/static/img/pause-button.svg';
import PlayButton from '@site/static/img/play-button.svg';

import {
  Typography
} from '@material-ui/core';
import {
  ScaleBox,
  AudioButton,
  IntersectionObserver
} from '../../components'

import styles from './styles.module.css';

function useOutsideAlerter(ref, setShowingStory) {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              setShowingStory(showingStoryUpdated => {
                if (showingStoryUpdated) return false;
                return showingStoryUpdated;
              })
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}

const SmallFloatingStory = ({backgroundOrbSource, oneImage, imageSource}) => {
  if (oneImage) return (
    <div className={styles.storyImageHolder}>
      <img
        alt="Orb background"
        src={useBaseUrl(backgroundOrbSource)}
        width={"120px"}
      />
    </div>
  )
  return (
    <div className={styles.storyImageHolder}>
      <img
        alt="Orb background"
        src={useBaseUrl(backgroundOrbSource)}
        width={"120px"}
      />
      <img
        alt="Orb image"
        src={useBaseUrl(imageSource)}
        className={styles.storyImage}
      />
    </div>
  )
}

const StoryPopover = forwardRef((props, ref) => {
  return (
    <div className={styles.biggerStory} ref={ref}>
      <ScaleBox
        delayStart={0}
        duration={0.2}
      >
        <img
          alt="Orb background"
          src={useBaseUrl('img/orb-yellow-background.png')}
          width={"400px"}
        />
        <IntersectionObserver reset={true}>
          <div className={styles.storyContent}>
            <div className={styles.storyContentImageHolder}>
              <SmallFloatingStory
                backgroundOrbSource={props.backgroundOrbSource}
                oneImage={props.oneImage}
                imageSource={props.imageSource}
              />
            </div>
            <Typography align='center' variant='h6' gutterBottom>{props.title}</Typography>
            <AudioButton
              audioFilePath={props.audioFilePath}
            />
          </div>
        </IntersectionObserver>
      </ScaleBox>
    </div>
  )
});

export function StoryOrb({
  imageSource,
  audioFilePath,
  title,
  oneImage = false,
  ...rest
}) {
  // 'audio/parade-krishnan.mp3'
  const [showingStory, setShowingStory] = useState(false);
  const popoverRef = useRef(null);
  useOutsideAlerter(popoverRef, setShowingStory);
  // img/baker-face.png
  const backgroundOrbSource = oneImage ? imageSource : 'img/orb-yellow-background.png';

  return (
    <div
      {...rest}
    >
      { showingStory ?
        <StoryPopover
          ref={popoverRef}
          backgroundOrbSource={backgroundOrbSource}
          oneImage={oneImage}
          imageSource={imageSource}
          audioFilePath={audioFilePath}
          title={title}
          stopIt={!showingStory}
        />
      :
        <ScaleBox
          delayStart={0}
          duration={0.4}
          className={styles.smallStoryOrb}
          onClick={() => setShowingStory(true)}
        >
          <SmallFloatingStory
            backgroundOrbSource={backgroundOrbSource}
            oneImage={oneImage}
            imageSource={imageSource}
          />
        </ScaleBox>
      }
    </div>
  );
}