import React from 'react'
import { BoardStats, HexStats } from './GameConstants'
import '../public/css/Overlay.css'
const { shape, number, string, arrayOf } = React.PropTypes

const Overlay = React.createClass({
  propTypes: {
    features: arrayOf(shape({
      name: string,
      x: number,
      y: number,
      icon: string,
      pos: string
    }))
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
            <div
              key={feat.pos}
              className={`feature ${feat.pos} ${feat.name}`}
              style={{
                top: `${feat.y - (HexStats.hexSize / 2)}px`,
                left: `${feat.x - (HexStats.hexSize / 2)}px`
              }}
            >
              <i
                className={feat.icon}
              />
            </div>
          )
        })}
      </div>
    )
  }
})

export default Overlay
