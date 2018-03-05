import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
