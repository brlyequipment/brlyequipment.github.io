import React, { Component } from 'react';
//import logo from './logo.svg';
import Particle from './particleSystem.js'
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <div id="particles-js"></div>
          <Particle />
          <h2>Welcome to Burly Boards</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

  }


}

export default App;
//<img src={logo} className="App-logo" alt="logo" />
