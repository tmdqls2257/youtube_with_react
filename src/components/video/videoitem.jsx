import React from 'react';
import styles from './videoItem.module.css';

const Videoitem = ({video: {snippet}, video, onVideoClick, display}) => {
  //props를 deconstracting하여 video안에 있는 snippet을 가져옵니다.

  const displayType = display === 'list' ? styles.list : styles.grid;

  return(
<li onClick={()=>onVideoClick(video)} className={`${styles.video} ${displayType}`}>
  <img src={snippet.thumbnails.medium.url} alt="" />
  <div>
  <h2 className={`${styles.title} ${displayType}`}>{snippet.title}</h2>
  <p  className={styles.channelTitle}>{snippet.channelTitle}</p>
  </div>
</li>
  );
  };


export default Videoitem;