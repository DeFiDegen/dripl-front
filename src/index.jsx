// NEVER change this file

import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app';

// Target HTML document and render App component
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
