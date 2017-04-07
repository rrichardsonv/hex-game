import React from 'react'
import '../public/css/Canvas.css'
import Hex from './Hex'
import Grid from './Grid'

const Canvas = React.createClass({
  render () {
    return (
      <svg
        width='700'
        height='600'
        className='board'
        xmlns='http://www.w3.org/2000/svg'
      >
        {Grid.map((hexObj) => {
          return (
            <Hex coords={hexObj.points} terrain='desert' />
          )
        })}
      </svg>
    )
  }
})

export default Canvas
