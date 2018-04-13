const expect = require('expect.js');

let Battleship = require("./../src/battleship.js")


let GridFactory = function(){
  let grid = []
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
describe('adding two players on init', function() {
  let battleship = new Battleship()
  let playerOne = battleship.playerOne
  let playerTwo = battleship.playerTwo

  it('adds two players to playerOne and playerTwo props', function() {
    expect(typeof playerOne).to.eql('object')
    expect(typeof playerTwo).to.eql('object')
    expect(playerOne.name).to.eql('')
    expect(playerOne.ships).to.eql([])
  })

  describe('grid property on init', function() {
    describe('lower grid', function(){
      it('returns a 10x10 grid of objects', function() {
       let actual = playerOne.lowerGrid
        expect(actual).to.eql(GridFactory())
      })
    })

    describe('upper grid', function(){
      it('returns a 10x10 grid of objects', function() {
        let actual = playerOne.upperGrid
        expect(actual).to.eql(GridFactory())
      })
    })
  })

  describe('adding ships', function() {
    describe('creating a ship', function(){
      it('is initialized with appropriate props', function(){
        let props = {
          name: 'Patrol Boat',
          length: 2
        }
        let ship = battleship._createShip(props) 
        expect(typeof ship).to.eql('object')
        expect(ship.name).to.eql(props.name)
        expect(ship.length).to.eql(props.length)
      })
    })
    describe('choosing a ship', function(){
      it('allows player to select a ship, choose orientation, start coords', function() {
        battleship.playerOne.addShip('Aircraft Carrier', 'horizontal', 'A1')
        battleship.playerOne.addShip('Battleship', 'horizontal', 'A1')
        expect(playerOne.ships.length).to.eql(2)
      })
      it('adds the ship to the upperGrid for the player', function(){
        battleship.playerOne.addShip('Aircraft Carrier', 'horizontal', 'C5')
        let startingPoint = playerOne.upperGrid.find(function(space){
          if(space.y == 5 && space.x == 'C'){
            return space
          }
        })
        expect(startingPoint.ship).not.to.be(undefined)
        expect(startingPoint.ship.name).to.eql('Aircraft Carrier')
        let nextPoint = playerOne.upperGrid.find(function(space){
          if(space.y == 5 && space.x == 'G'){
            return space
          }
        })
        expect(nextPoint.ship.name).to.eql('Aircraft Carrier')
        let outOfBounds = playerOne.upperGrid.find(function(space){
          if(space.y == 5 && space.x == 'H'){
            return space
          }
        })
        expect(outOfBounds.ship).to.eql(undefined)
      })
      // choose coordinates
      //   - can't go over boundary
      //   - can't intersect another ship
      //   - must be vertical or horizontal
    })
  })

  
})
