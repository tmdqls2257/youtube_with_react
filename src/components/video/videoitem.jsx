import React from 'react';
import styles from './videoItem.module.css';

const Videoitem = ({video: {snippet}}) => {
  //props를 deconstracting하여 video안에 있는 snippet을 가져옵니다.

  return(
<li className={styles.video}>
  <img src={snippet.thumbnails.medium.url} alt="" />
  <div>
  <h2 className={styles.title}>{snippet.title}</h2>
  <p  className={styles.channelTitle}>{snippet.channelTitle}</p>
  </div>

</li>
  );
  };


export default Videoitem;