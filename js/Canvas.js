import React from 'react'
import '../public/css/Canvas.css'
import Hex from './Hex'
import Grid from './Grid'
import { makeTerrainPath } from './GameFunctions'
import { Terrain } from './GameConstants'

const Canvas = React.createClass({
  render () {
    const { stroke, fill, d } = Terrain.path
    return (
      <svg
        width='700'
        height='600'
        className='board'
        xmlns='http://www.w3.org/2000/svg'
      >
        {Grid.map((hexObj) => {
          return (
            <Hex
              fill={Terrain.fill}
              stroke={Terrain.stroke}
              className={Terrain.name}
              coords={hexObj.points}
            />
          )
        })}
        {Grid.map((hexObj) => {
          return (
            <path
              stroke={stroke}
              fill={fill}
              d={makeTerrainPath(hexObj.points[5], d.start, d.path)}
            />
          )
        })}
      </svg>
    )
  }
})

export default Canvas
