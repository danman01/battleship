// use strict;
//
const Battleship = function Battleship() {
  this.playerOne = this.addPlayer()
  this.playerTwo = this.addPlayer()
}

Battleship.prototype.addPlayer = function() {
  return {name: '', moves: 0, winner: false, upperGrid: this.createUpperGrid(), lowerGrid: this.createLowerGrid(), ships: [], addShip: this._addShip}
}

/* called by a player to add a ship to their ships array */
Battleship.prototype._addShip = function(name, orientation, start_coord) {
  // TODO add tests
  const ships = {
    'Aircraft Carrier': 5,
    'Battleship': 4,
    'Submarine': 3,
    'Destroyer': 3,
    'Patrol Boat': 2
  }
  let props = {name: name, length: ships[name], orientation: orientation, start_coord}
  let ship = Battleship.prototype._createShip(props)
  let player = this // if called by a player
  player.ships.push(ship)
  player.upperGrid.find(function(space){
    // find starting space for the ship and place it on the grid
    if(space.y == start_coord[1] && space.x == start_coord[0]){
      space.ship = ship
      let length = ship.length
      for(let i = 1; i < ship.length; i++){
        player.upperGrid.find(function(space){
        // horizontal
          if(ship.orientation == 'horizontal'){
            if(space.y == start_coord[1] && space.x == String.fromCharCode(start_coord[0].charCodeAt() + i)){
              space.ship = ship
            }
          } else {
            // vertical
             if(space.y == start_coord[1] + 1 && space.x == start_coord[0]){
              space.ship = ship
            }
          }
        })
      }
    }
  })
  return ship
}


Battleship.prototype._createShip = function(props){
  return props 
}

  
Battleship.prototype.createGrid = function() {
// Players must arrange ships and record the shots made by their opponent on the lower grid, while recording their own shots on the upper grid.
  let grid = []
  // ascii 65-90 are A-Z
  for(let x = 65; x < 75; x++){
    for(let y = 0; y < 10; y++){
      grid.push({
        hit: undefined,
        miss: undefined,
        ship: undefined,
        y: y,
        x: String.fromCharCode(x)
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
