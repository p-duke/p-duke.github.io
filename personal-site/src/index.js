import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
global.jQuery = require('jquery');
require('bootstrap');
var Scrollspy = require('react-scrollspy').Scrollspy;


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
