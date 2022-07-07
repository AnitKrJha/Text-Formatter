import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import TextHolder from './components/textholder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  <Header company='Text Modifier'/>
  <TextHolder/>
  
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
