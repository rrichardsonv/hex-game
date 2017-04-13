import React from 'react'
import { connect } from 'react-redux'
import '../public/css/Canvas.css'
import Hex from './Hex'
import Grid from './Grid'
import Texture from './Texture'
import Overlay from './Overlay'
import Player from './Player'
import { Terrain, BoardStats } from './GameConstants'

const Canvas = React.createClass({
  featureRender (hex) {
    return {
      name: hex.terrain,
      x: Math.floor(hex.center[0]),
      y: Math.floor(hex.center[1]),
      icon: hex.icon,
      pos: hex.pos.join('-')
    }
  },
  render () {
    const { boardHeight, boardWidth } = BoardStats
    const features = Grid.map((hex) => {
      return (
        this.featureRender(hex)
      )
    })
      .filter((feat) => {
        return (
          feat.name !== 'Water'
        )
      })
    return (
      <div>
        <Player />
        <Overlay features={features} />
        <svg
          width={`${boardWidth}`}
          height={`${boardHeight}`}
          className='board'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            {Terrain.map((terrain) => {
              return (
                <Texture
                  key={terrain.id}
                  color={terrain}
                />
              )
            })}
          </defs>
          {Grid.map((hexObj) => {
            return (
              <Hex
                key={hexObj.pos.join('-')}
                handleFeatureClick={this.handleFeatureClick}
                hexSpecs={hexObj}
                texture={`url(#${hexObj.terrain})`}
              />
            )
          })}
        </svg>
      </div>
    )
  }
})

export default Canvas
