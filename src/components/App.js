import React from 'react';
import './App.css';

export default class App extends React.Component {
    render() {
        document.title = 'Home';
        return (
            <div className="App">
                <p>Hello?</p>
            </div>
        );
    }
}
