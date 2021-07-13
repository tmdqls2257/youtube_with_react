import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Videolist from './components/video/videolist';
import Nav from './components/nav';


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
    <section className='content'>
    <Nav />
    <Videolist videos={videos}/>
    </section>
    </>
  );
}

export default App;