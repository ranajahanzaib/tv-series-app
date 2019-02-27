import React, { Component } from 'react';
import Intro from './Components/Intro';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state  = {
    series: []
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Search for your favorite TV Shows here</h1>
        </header>
        <Intro message='Here you can find all of your loved tv series'/>
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
