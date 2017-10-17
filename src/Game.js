import React, { Component } from 'react';
import logo from './Battleship_Logo.jpg';
import Board from './Board'
import Welcome from './Welcome'

class Game extends Component {
  render() {
    let sizes = [2,3,4,5,6]
    let num_ships = sizes.length
    let ships = []
    let positions = ['hor','ver']
    for(let i = 0; i < num_ships; i++) {
      let size = sizes.pop()
      let hp = []
      for(let o = 1; o < size; o++) {
        hp.push(true)
      }
      let ship = {
        hp: hp,
        position: positions[size % 2],
        coords: []
      }
      ships.push(ship)
    }
    console.log("ships are", ships)
    return (
      <div className="Game">
        <div className="Game-header">
          <img src={logo} className="Game-logo" alt="logo" caption="Logo Copyright Tim Frame"/>
          <h2>Battleship</h2>
          <Welcome />
        </div>
        <p className="Game-intro">
          This is a Work in Progress. The ships currently collide sometimes, and you can't yet fire on them. Also there's just one board for both players at this time.
        </p>
        <Board ships={ships} />
      </div>
    );
  }
}

export default Game;
