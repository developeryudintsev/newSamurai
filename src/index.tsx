import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messageData=[
    {id:1,messages:'Hi,how are you',lickeCount:10000000000000000},
    {id:2,messages:"It's my first post",lickeCount: 99999999},
]
let messagesData=[
    {id:1,name:'hi'},
    {id:2,name:'hihihihihihihihihihihihihihihihi!!!!!!!!!!!!!'},
    {id:3,name:'hi'}
]
let dailogsData=[
    {id:1,name:'Dima'},
    {id:2,name:'Sasha'},
    {id:3,name:'Igor'}
]
ReactDOM.render(
  <React.StrictMode>
    <App messageData={messageData} messagesData={messagesData} dailogsData={dailogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
