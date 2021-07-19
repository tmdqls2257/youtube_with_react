import React from 'react';
import Videoitem from './videoitem';
import styles from './videos.module.css';

const Videolist = ({videos, onVideoClick, display}) => (
  <ul className={styles.videos}>
    {videos.map(video => (
      <Videoitem display={display} onVideoClick={onVideoClick} key={video.id} video={video}/>
    ))}
  </ul>
  );

export default Videolist;