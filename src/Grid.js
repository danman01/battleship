import React, { Component } from 'react';

class Grid extends Component {
  render() {
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

    const gridItems = []
    for( let i = 0; i < this.props.x; i++){
      for ( let o = 0; o < this.props.y; o++){
        let el = <span style={gridItemStyle} className='plot' key={i +' '+ o}></span>
        gridItems.push(el)
      }
    }
    
    const ships = []
    for(let i = 0; i < this.props.ships.length; i++){
      let ship = this.props.ships[i]
      let randomXStart = Math.floor((Math.random() * 10) + 1) // make dynamic based on x and y
      let randomYStart = Math.floor((Math.random() * 10) + 1) // make dynamic based on x and y

      let gridColumnStart;
      let gridColumnEnd;
      let gridRowStart;
      let gridRowEnd;
      if(ship.position === 'hor') {
        gridColumnStart = this.props.y - ship.hp.length 
        gridColumnEnd = this.props.y
        gridRowStart = this.props.x - randomXStart
        gridRowEnd = gridRowStart
      } else {
        gridRowStart = this.props.x - ship.hp.length
        gridRowEnd = this.props.x 
        gridColumnStart = this.props.y - randomYStart
        gridColumnEnd = gridColumnStart
      }

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
      let ship_el = <div className='ship' style={shipStyle} key={i}><div className='bg' style={shipBgStyle}>ship {i}</div></div>
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
