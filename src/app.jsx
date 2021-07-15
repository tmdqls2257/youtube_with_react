import React, { useEffect, useState } from 'react';
import './app.module.css';
import Header from './components/header/header';
import Videolist from './components/video/videolist';
import Nav from './components/nav/nav';
import styles from './app.module.css';


function App() {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyACklw79EzAcgQf9HuB4rJJYDsHHpBs-Ik&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyACklw79EzAcgQf9HuB4rJJYDsHHpBs-Ik", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <>
    <Header />
    <section className={styles.content}>
    <Nav />
    <Videolist videos={videos}/>
    </section>
    </>
  );
}

export default App;