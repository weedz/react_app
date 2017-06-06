import React from 'react';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';


export default class App extends React.Component {
    render() {
        return(
            <Routes/>
        );
    }
}