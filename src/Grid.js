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
    return (
      <div style={boardStyle}>
        <div style={gridStyle}>
          {gridItems}
        </div>
      </div>
    )
  }

}

export default Grid
