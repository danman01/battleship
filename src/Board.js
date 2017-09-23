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
          <ul>
            {this.props.ships.map(item => (
              <li key={this.props.ships.indexOf(item)}>
                <ul>
                  <li>ship</li>
                  <li>hp: {item.hp.map((e) => new String(e))}</li>
                  <li>Pos: {item.position}</li>
                </ul>
              </li>
            ))}
          </ul>
          <div>
            <Grid x={10} y={10} />
          </div>
      </div>
    );
  }
}

export default Board;
