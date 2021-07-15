import React, { useEffect, useState } from 'react';
import './app.module.css';
import Header from './components/header/header';
import Videolist from './components/video/videolist';
import Nav from './components/nav/nav';
import styles from './app.module.css';


function App({youtubeServer}) {
  const [videos, setVideos] = useState([]);
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
    <Nav />
    <Videolist videos={videos}/>
    </section>
    </div>
  );
}

export default App;