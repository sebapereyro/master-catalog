// index.js -> Redux and the Root Component
// This is the data layer of our application
// In this file we will setup everything about Redux
//import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const rootDocument = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDocument
);
