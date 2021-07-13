import React from 'react';
import Videoitem from './videoitem';
import styles from './videos.css';

const Videolist = (props) => (
  <ul className={styles.videos}>
    {props.videos.map(video => (
      <Videoitem key={video.id} video={video}/>
    ))}
  </ul>
  );

export default Videolist;