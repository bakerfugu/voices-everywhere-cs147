import React from 'react';
import {
  Typography,
} from '@material-ui/core';

import styles from './styles.module.css';

export function LinkRow({firstWord, secondWord, secondWordLink, thirdWord = null, thirdWordLink = null}) {
  // console.log('Link Row: ', `\n - ${firstWord}\n - ${secondWord}=${secondWordLink}\n - ${thirdWord}=${thirdWordLink}`);
  return (
    <div className={styles.linkRow}>
      <Typography variant="subtitle1">
        {`${firstWord} `} 
        { secondWordLink && 
          <a href={secondWordLink} style={{fontWeight:'bold'}}>{secondWord}</a>
        }
        { thirdWordLink && ` | `}
        { thirdWordLink && 
          <a href={thirdWordLink} style={{fontWeight:'bold'}}>{thirdWord}</a>
        }
      </Typography>
    </div>
  );
}