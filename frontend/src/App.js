import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js'
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {
  componentDidMount(){
  	console.log('props in app',this.props)
  }
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

export default withCookies(App);
