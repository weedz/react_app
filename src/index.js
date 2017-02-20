import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import {browserHistory} from 'react-router';
import Routes from './routes';

import './index.css';

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);

ReactDOM.render(
    <Routes history={browserHistory}/>,
  document.getElementById('root')
);

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);