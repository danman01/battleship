import React, { Component } from 'react';

class Grid extends Component {
  render() {
    let props = this.props
    const gridItemStyle = {
      zIndex: '50',
      background: 'none',
      boxShadow: 'inset 2px 2px 0 rgba(255, 255, 255, 0.05), inset -2px -2px 0 #665235',
      width: '100%',
      height: '100%'
    }
    const boardStyle = {
      position: 'relative',
      width: '50vw',
      height: '50vw',
      minWidth: '300px',
      minHeight: '300px',
      overflow: 'hidden',
      border: '12px solid #6D5720',
      borderRadius: '12px'
    }
    let gridStyle = { 
      display: 'grid',
      gridTemplateColumns: 'repeat(' + this.props.y + ', '+ 100/this.props.y + '%)',
      gridTemplateRows: 'repeat(' + this.props.x + ', ' + 100/this.props.x + '%)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }

    Array.prototype.any = function(func) {
      return this.some(func || function(x) { return x });
    }

    const random = function(int){
      return Math.floor((Math.random() * int) + 1) // make dynamic based on x and y
    }

    const gridItems = []
    for( let i = 0; i < this.props.x; i++){
      for ( let o = 0; o < this.props.y; o++){
        let el = <span style={gridItemStyle} className='plot' key={i +' '+ o}></span>
          gridItems.push(el)
      }
    }

    const ships = []
    const occupied_spaces = []
    let gridColumnStart
    let gridColumnEnd
    let gridRowStart
    let gridRowEnd

    const generate_hor_ship_coords = function(ship) {
      let randomYStartLimit = props.y - ship.hp.length
      let randomYStart = random(randomYStartLimit)

      let randomXStart = random(props.x)
      gridColumnStart = randomYStart
      gridColumnEnd = randomYStart + ship.hp.length + 1
      gridRowStart = props.x - randomXStart
      gridRowEnd = gridRowStart
      let coords = []
      for( let c = ship.hp.length; c >=0; c--){
        coords.push([gridRowStart,gridColumnStart + c])
      }
      return(coords)
    }

    const generate_ver_ship_coords = function(ship){
      let randomXStartLimit = props.x - ship.hp.length
      let randomXStart = random(randomXStartLimit)
      let randomYStart = random(props.y)
      gridColumnStart = props.y - randomYStart
      gridColumnEnd = gridColumnStart
      gridRowStart = randomXStart
      gridRowEnd = randomXStart + ship.hp.length + 1
      let coords = []
      for( let c = ship.hp.length; c >=0; c--){
        coords.push([gridRowStart + c ,gridColumnStart])
      }
      return(coords)
    }

    const containsElement = function(el, index, arr) {
      return el === arr[index]
    }

    const generate_coords = function(callback,ship){
      let coords = callback(ship)
      // track occupied coords
      for( let c = 0; c <= ship.hp.length; c++){
        //if(occupied_spaces.some(containsElement(coords))){
        //  // what does this do
        //}
        while(occupied_spaces.any(function(x){x === coords[c]})){
          // already taken -- regen coords
          coords = callback(ship)
        }
        occupied_spaces.push(coords[c])
      }
      return(coords)
    }

    for(let i = 0; i < this.props.ships.length; i++){
      let ship = this.props.ships[i]

            let coords
      if(ship.position === 'hor') {
        coords = generate_coords(generate_hor_ship_coords, ship)
      } else {
        coords = generate_coords(generate_ver_ship_coords, ship) 
      }
      ship.coords = coords

      // TODO take into account ships already added so no collisions
      let shipStyle = {
        backgroundColor: 'gray',
        gridColumnStart: gridColumnStart,
        gridColumnEnd: gridColumnEnd,
        gridRowStart: gridRowStart,
        gridRowEnd: gridRowEnd
      }
      const shipBgStyle = {
        height: '100%',
        textAlign: 'left'
      }
      let ship_el = <div data-coords={coords} className='ship' style={shipStyle} key={i}><div className='bg' style={shipBgStyle}>ship {i}</div></div>
        ships.push(ship_el)
    }

    return (
      <div className='board' style={boardStyle}>
        <div className='plots' style={gridStyle}>
          {gridItems}
        </div>
        <div className='ships' style={gridStyle}>
          {ships}
        </div>
      </div>
    )
  }

}

export default Grid
