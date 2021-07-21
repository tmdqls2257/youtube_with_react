import React from 'react';
import styles from './detail.module.css';

const Detail = ({video, video:{snippet}}) => {
  
  return(
    <section className={styles.detail}>
      <iframe 
      id="ytplayer" 
      type="text/html" 
      width="100%" 
      height="600px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0" 
      allowfullscreen>
      </iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <span>{snippet.description}</span>
    </section>
  )
};

export default Detail;