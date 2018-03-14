Battleship build with javascript

How the game works
- game initializes with 10x10 grid
- game starts with two players
- each player can see their game board with a set of ships
- each player recieves five ships, the aircraft carrier, battleship, cruiser, submarine, and destroyer
- each ship has 5,4,3,2

Rules:
- Ships must be placed horizontally or vertically (never diagonally) across grid spaces, and can't hang over the outer grid boundary.
- Ships may not be placed next to each other, nor are ships allowed to share a space with another ship.
- Players must arrange ships and record the shots made by their opponent on the lower grid, while recording their own shots on the upper grid.
- Players must take turns, with each player's turn consisting of announcing a target square in the opponent's grid which is to be shot at.
- If a ship occupies the square, the owner of the ship must announce a "hit." Likewise, if no ship occupies the square, the player must inform of a "miss."
- When all of the squares of a ship have been hit, the ship is sunk.
- Players must announce to their opponent each time one of their ships is sunk. (Example: "You sunk my Battleship!")
- The winner is the first player to sink their opponent's ships before all of their own are sunk.

Ships:

Type of ship	Length
Aircraft Carrier	5
Battleship	4
Submarine	3
Destroyer	3
Patrol Boat	2

AI:
- computer starts in Hunt mode, firing at random until it hits a ship
  - can reduce squares by half using parity (only blue squares)
  - more advanced: probability density function (44 moves per game)
- when it hits, it focuses fire on the adjacent squares
- once sunk, the computer reverts to Hunt mode
- average 66 moves to sink a ship

Testing with Mocha
