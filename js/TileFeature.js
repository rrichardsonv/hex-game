import React from 'react'
import { HexStats } from './GameConstants'
const { string, number, shape } = React.PropTypes

const TileFeature = React.createClass({
  propTypes: {
    feature: shape({
      pos: string,
      name: string,
      icon: string,
      y: number,
      x: number
    })
  },
  render () {
    const { pos, icon, name, y, x } = this.props.feature
    return (
      <div
        className={`feature ${pos} ${name}`}
        style={{
          top: `${y - (HexStats.hexSize / 2)}px`,
          left: `${x - (HexStats.hexSize / 2)}px`
        }}
      >
        <i className={icon} />
      </div>
    )
  }
})

export default TileFeature
