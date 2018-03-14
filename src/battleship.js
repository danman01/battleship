// use strict;
//
const Battleship = function Battleship() {
  this.grid = this.createGrid()
  this.playerOne = this.addPlayer()
  this.playerTwo = this.addPlayer()
}

Battleship.prototype.addPlayer = function() {
  return {name: '', moves: 0, winner: false}
}
Battleship.prototype.createGrid = function() {
  let grid = []
  for(let y = 0; y < 10; y++){
    for(let x = 0; x < 10; x++){
      grid.push({})
    }
  }
  return grid
}

module.exports = Battleship
