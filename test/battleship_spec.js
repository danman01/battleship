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
    })

  describe('grid property on init', function() {
    describe('opponent grid', function(){
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

        let actual = playerOne.opponentGrid
        expect(actual).to.eql(grid)
      })
    })
  })

})
