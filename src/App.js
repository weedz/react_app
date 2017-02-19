import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <p>{this.props.user.name}</p>
            <Footer/>
        </div>
    );
  }
}

export default App;
