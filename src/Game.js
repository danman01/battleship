import React, { Component } from 'react';
import logo from './Battleship_Logo.jpg';
import './App.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <div className="Game-header">
          <img src={logo} className="Game-logo" alt="logo" />
          <h2>Battleship</h2>
        </div>
        <p className="Game-intro">
          To get started, edit <code>src/Game.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Game;
