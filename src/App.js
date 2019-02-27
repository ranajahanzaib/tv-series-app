import React, { Component } from 'react';
import Intro from './Components/Intro/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Search for your favorite TV Shows here</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
