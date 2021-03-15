import React, { useState, useEffect, useContext } from 'react';
import useSound from 'use-sound';

import PauseButton from '@site/static/img/pause-button.svg';
import PlayButton from '@site/static/img/play-button.svg';
import LoadingAudioButton from '@site/static/img/loading-audio-button.svg';
import { IntersectionContext } from "../intersection-observer";

import styles from './styles.module.css';

export function AudioButton({
  audioFilePath,
}) {
  const { inView } = useContext(IntersectionContext);
  const [play, { pause, stop, isPlaying, duration }] = useSound(audioFilePath);

  useEffect(() => {
    if (!inView) {
      // console.log('Audio stopping cuz inview false.', duration, !!stop);
      stop();
    }
    return () => {
      // console.log('Audio stopping from inView unmount', duration, !!stop);
      stop();
    }
  }, [inView])

  useEffect(() => {
    return () => {
      // console.log('Audio stopping from full compon unmount', duration, !!stop);
      stop();
    }
  }, [])
  
  // console.log('Audio button. inView?', inView, 'isPlay', isPlaying, 'durat', duration, 'snip.');
  return (
    <div
      className={styles.clickable}
      onClick={() => {
        if (isPlaying) {
          pause();
        } else {
          play();
        }
      }}
    >
      { !duration ?
        <LoadingAudioButton/>
      : isPlaying ? 
        <PauseButton/>
      :
        <PlayButton/>
      }
    </div>
  );
}