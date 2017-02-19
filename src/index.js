import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const user = {
    name: 'WeeDz',
};

ReactDOM.render(
  <App user={user}/>,
  document.getElementById('root')
);