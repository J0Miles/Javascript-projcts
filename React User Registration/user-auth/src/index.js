import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './stores';
import { Provider } from 'react-redux';
import Intro from './components/Intro';

const app = (
  <Provider store={store.configure(null)}>
    <Intro />
  </Provider>
);

ReactDOM.hydrate(app, document.getElementById('root'));
