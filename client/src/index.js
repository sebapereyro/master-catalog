// index.js -> Redux and the Root Component
// This is the data layer of our application
// In this file we will setup everything about Redux

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
