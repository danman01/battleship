// use strict;
//
const Battleship = function Battleship() {
  this.playerOne = this.addPlayer()
  this.playerTwo = this.addPlayer()
}

Battleship.prototype.addPlayer = function() {
  return {name: '', moves: 0, winner: false, upperGrid: this.createUpperGrid(), lowerGrid: this.createLowerGrid()}
}

Battleship.prototype.addShip = function(name) {
  // TODO add tests
  const SHIPS = {
    'Aircraft Carrier': 5,
    'Battleship': 4,
    'Submarine': 3,
    'Destroyer': 3,
    'Patrol Boat': 2
  }
  this.ships.push(SHIPS[name])
  return this.ships.length
}
  
Battleship.prototype.createGrid = function() {
// Players must arrange ships and record the shots made by their opponent on the lower grid, while recording their own shots on the upper grid.
  let grid = []
  for(let y = 0; y < 10; y++){
    for(let x = 0; x < 10; x++){
      grid.push({
        hit: undefined,
        miss: undefined,
      })
    }
  }
  return grid
}
Battleship.prototype.createUpperGrid = function() {
  return this.createGrid()
}
Battleship.prototype.createLowerGrid = function() {
  return this.createGrid()
}


module.exports = Battleship
