import React, { useState, useEffect, useContext } from 'react';
import useSound from 'use-sound';

import PauseButton from '@site/static/img/pause-button.svg';
import PlayButton from '@site/static/img/play-button.svg';
import { IntersectionContext } from "../intersection-observer";

import styles from './styles.module.css';

export function AudioButton({
  audioFilePath,
}) {
  const { inView } = useContext(IntersectionContext);
  const [play, { pause, stop }] = useSound(audioFilePath);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!inView) stop();
    return () => stop();
  }, [inView])
  
  return (
    <div
      className={styles.clickable}
      onClick={() => {
        setPlaying(playingUpdated => {
          if (playingUpdated) {
            pause();
            return false;
          } else {
            play();
            return true;
          }
        });
      }}
    >
      { playing ? 
        <PauseButton/>
      :
        <PlayButton/>
      }
    </div>
  );
}