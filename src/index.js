import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import youtube from './service/server';


const youtubeServer = new youtube(process.env.REACT_APP_YOTUBE_API_KEY); //App에 직접으로 선언하면 App가 실행될 때마다 네트워크 통신을 하게 됨으로 좋지 않다
ReactDOM.render(
  <React.StrictMode>
    <App youtubeServer={youtubeServer}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
