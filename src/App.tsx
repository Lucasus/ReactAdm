import * as React from 'react';
import { Component } from 'react';
import './App.css';

import * as loadtest from './loadtest/index';

const logo = require('./logo.svg');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React123555</h2>
        </div>
        <p className="App-intro">
          To getfdfd started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

loadtest.writeAll();

export default App;


