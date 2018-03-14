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
