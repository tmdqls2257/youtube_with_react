import React, { useEffect, useState } from 'react';
import './app.module.css';
import Header from './components/header/header';
import Videolist from './components/video/videolist';
import Nav from './components/nav/nav';
import styles from './app.module.css';
import Detail from './components/detail/detail';


function App({youtubeServer}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const selectVideo = video =>{
    setSelected(video);
  }

  const search = query => {
    youtubeServer.search(query).then(result => setVideos(result));
  };

  useEffect(()=>{
    youtubeServer.mostPopularVideo().then(result => setVideos(result));
  }, []);

  return (
    <div className={styles.app}>
    <Header onSearch={search} />
    <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Detail video={selectedVideo} />
          </div>
        )}
    <section className={styles.list}>
    <Nav display={selectedVideo ? 'none' : 'grid'}/>
    <Videolist display = {selectedVideo ? 'list' : 'grid'} onVideoClick={selectVideo} videos={videos}/>
    </section>
    </section>
    </div>
  );
}

export default App;