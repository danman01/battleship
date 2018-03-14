Battleship build with javascript

How the game works
- game starts with two players
- each player can see their game board with a set of ships
- the game board is a 10x10 grid
- each player recieves five ships, the aircraft carrier, battleship, cruiser, submarine, and destroyer

AI:
- computer starts in Hunt mode, firing at random until it hits a ship
  - can reduce squares by half using parity (only blue squares)
  - more advanced: probability density function (44 moves per game)
- when it hits, it focuses fire on the adjacent squares
- once sunk, the computer reverts to Hunt mode
- average 66 moves to sink a ship

Testing with Mocha
