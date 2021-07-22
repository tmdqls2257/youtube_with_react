import React, { memo } from 'react';
import styles from './videoItem.module.css';

const Videoitem = memo(({video: {snippet}, video, onVideoClick, display}) => {
  //props를 deconstracting하여 video안에 있는 snippet을 가져옵니다.

  const displayType = display === 'list' ? styles.list : styles.grid;



  return(
<li onClick={()=>onVideoClick(video)} className={`${styles.container} ${displayType}`}>
  <div className={`${styles.video} ${displayType}`}>
    <img className={`${styles.thumbnail} ${displayType}`} src={snippet.thumbnails.medium.url} alt="" />
    <div className={`${styles.metadata} ${displayType}`} >
      <h3 className={`${styles.title}`}>{snippet.title}</h3>
      <p  className={styles.channelTitle}>{snippet.channelTitle}</p>
    </div>
  </div>
</li>
  );
  });


export default Videoitem;