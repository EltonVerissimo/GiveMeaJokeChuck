import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import './main.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="main-container">
    <Home/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);