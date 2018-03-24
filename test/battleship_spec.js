const expect = require('expect.js');

let Battleship = require("./../src/battleship.js")


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

  describe('adding ships', function() {
    describe('creating a ship', function(){
      it('is initialized with appropriate props', function(){
        let props = {
          name: 'Patrol Boat',
          length: 2
        }
        let ship = battleship.createShip(props) 
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
      // choose coordinates
      //   - can't go over boundary
      //   - can't intersect another ship
      //   - must be vertical or horizontal
    })
  })

  describe('grid property on init', function() {
    describe('lower grid', function(){
      it('returns a 10x10 grid of objects', function() {
        let grid = []
        for(let y = 0; y < 10; y++){
          for(let x = 0; x < 10; x++){
            grid.push({
              hit: undefined,
              miss: undefined
            })
          }
        }

        let actual = playerOne.lowerGrid
        expect(actual).to.eql(grid)
      })
    })

    describe('upper grid', function(){
      it('returns a 10x10 grid of objects', function() {
        let grid = []
        for(let y = 0; y < 10; y++){
          for(let x = 0; x < 10; x++){
            grid.push({
              hit: undefined,
              miss: undefined
            })
          }
        }

        let actual = playerOne.upperGrid
        expect(actual).to.eql(grid)
      })
    })
  })

})
