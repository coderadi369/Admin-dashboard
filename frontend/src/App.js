import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log("props",this.props)
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
