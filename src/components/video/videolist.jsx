import React from 'react'
import Videoitem from './videoitem'
import styles from './videos.module.css'

const Videolist = ({ videos, onVideoClick, display }) => (
  <ul className={styles.videos}>
    {videos.map(video => (
      <Videoitem
        display={display}
        onVideoClick={onVideoClick}
        key={video.id}
        video={video}
      />
    ))}
  </ul>
)
// 무언가 잘 되지 않는다면 컴포넌트에 props가 전달 되었는지 또는 state가 데이터에 있는지를 확인해야한다.
export default Videolist
