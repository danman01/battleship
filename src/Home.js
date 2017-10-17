import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is a Work in Progress. The ships currently collide sometimes, and you can't yet fire on them. Also there's just one board for both players at this time.
        </p>
      </div>
    );
  }
}

export default Home;
