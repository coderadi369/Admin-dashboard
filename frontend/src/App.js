import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js'

class App extends Component {
  render() {
    return (
      <div>
      <div id='appbase'>
      </div>
      <Routes/>
      </div>
    );
  }
}

export default App;
