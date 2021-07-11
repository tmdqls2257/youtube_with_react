import React from 'react';
import './app.css';
import Header from './components/header';
import Video from './components/video';
import Nav from './components/nav';



function App() {
  return (
    <>
    <Header />
    <section className='content'>
    <Nav />
    <Video />
    </section>
    </>
  );

}

export default App;
