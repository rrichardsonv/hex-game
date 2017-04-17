import React from 'react'
import { BoardStats } from './GameConstants'
import '../public/css/Overlay.css'
import TileFeature from './TileFeature'
const { object, arrayOf } = React.PropTypes

const Overlay = React.createClass({
  propTypes: {
    features: arrayOf(object)
  },
  render () {
    const { boardHeight, boardWidth } = BoardStats
    return (
      <div
        style={{
          height: `${boardHeight}px`,
          width: `${boardWidth}px`
        }}
        className='overlay'
      >
        {this.props.features.map((feat) => {
          return (
            <TileFeature key={feat.pos} feature={feat} />
          )
        })}
      </div>
    )
  }
})

export default Overlay
