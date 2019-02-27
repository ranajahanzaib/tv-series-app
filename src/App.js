import React, { Component } from 'react';
import Intro from './Components/Intro';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  state  = {
    series: []
  }

  componentDidMount() {
    const series = ["Vikings", "Game Of Thrones"];

    setTimeout(() => {
      this.setState({ series: series });
    }, 2000);
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
