const expect = require('expect.js');

let Battleship = require("./../src/battleship.js")

describe('grid property on init', function() {
  it('returns a 10x10 grid of objects', function() {
    let grid = []
    for(let y = 0; y < 10; y++){
      for(let x = 0; x < 10; x++){
        grid.push({})
      }
    }

    let actual = new Battleship().grid
    expect(actual).to.eql(grid)
  })  
})

describe('adding two players on init', function() {
  it('adds two players to playerOne and playerTwo props', function() {
    let battleship = new Battleship()
    let playerOne = battleship.playerOne
    let playerTwo = battleship.playerTwo
    expect(typeof playerOne).to.eql('object')
    expect(typeof playerTwo).to.eql('object')
    expect(playerOne.name).to.eql('')
  })
})
