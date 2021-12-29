import React, { useEffect, useState, useCallback } from 'react'
import './app.module.css'
import Header from './components/header/header'
import Videolist from './components/video/videolist'
import Nav from './components/nav/nav'
import styles from './app.module.css'
import Detail from './components/detail/detail'

function App({ youtubeServer }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelected] = useState(null)

  const selectVideo = video => {
    setSelected(video)
  }

  const search = useCallback(
    query => {
      // search하였을 때
      setSelected(null)
      youtubeServer.searchVideo(query).then(video => {
        setVideos(video)
        setSelected(null)
      })
    },
    [youtubeServer]
  )

  // 서버와의 통신을 위한 useEffect, 초기값을 []로 주면 처음에는 useEffect를 호출합니다. 그 이유는 컴포넌트가 업데이트 될 때마다 네트워크
  // 통신을 하는 것은 좋지 않기 때문 vidoes가 바뀔 때마다 업데이트 하기를 원한다면
  // 초기값을 [videos]로 설정
  useEffect(() => {
    youtubeServer.mostPopularVideo().then(video => setVideos(video))
  }, [])

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div display={videos ? 'none' : 'grid'} className={styles.detail}>
            <Detail video={selectedVideo} />
          </div>
        )}
        <section className={styles.list}>
          <Nav display={`${selectedVideo ? 'none' : 'grid'}`} />
          <Videolist
            display={`${selectedVideo ? 'list' : 'grid'}`}
            onVideoClick={selectVideo}
            videos={videos}
          />
        </section>
      </section>
    </div>
  )
}

export default App
