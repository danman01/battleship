import React, { Component } from 'react';
import logo from './Battleship_Logo.jpg';
import Grid from './Grid.js'

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <div className="Board-header">
          <h3>Board</h3>
        </div>
        <div>
          <Grid ships={this.props.ships} x={10} y={10} />
        </div>
      </div>
    );
  }
}

export default Board;
