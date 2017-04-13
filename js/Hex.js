import React from 'react'
import { connect } from 'react-redux'
import { setOccupiedHex } from './redux/actionCreators'
import '../public/css/Hex.css'

const { shape, string, arrayOf, number, func } = React.PropTypes

const Hex = React.createClass({
  propTypes: {
    hexSpecs: shape({
      center: arrayOf(number),
      pos: arrayOf(number),
      points: arrayOf(arrayOf(number))
    }),
    texture: string,
    handleFeatureClick: func,
    occupiedHex: string,
    playerTop: number,
    playerLeft: number,
    dispatch: func
  },
  handleClick () {
    this.props.handleFeatureClick(this.props.hexSpecs.center, this.props.texture)
  },
  hexSides () {
    const coords = this.props.hexSpecs.points
    let output = ''
    for (var i = 0; i < 7; i++) {
      if (i === 0) {
        output = output + `M ${coords[i].join(' ')}`
      } else if (i === 6) {
        output = output + ` L ${coords[0].join(' ')}`
      } else {
        output = output + ` L ${coords[i].join(' ')}`
      }
    }
    return output
  },
  componentWillMount () {
    setInterval(this.checkPlayerPosition, 3000)
  },
  checkPlayerPosition () {
    const sameCol = Math.abs((this.props.playerLeft + 17) - this.props.hexSpecs.center[0]) < 10
    const sameRow = Math.abs((this.props.playerTop + 15) - this.props.hexSpecs.center[1]) < 10
    console.log(this.props.occupiedHex)
    if (sameRow && sameCol) {
      const hexCoords = this.props.hexSpecs.pos.join('-')
      this.props.dispatch(setOccupiedHex(hexCoords))
    }
  },
  displayOccupationStatus () {
    const center = this.props.hexSpecs.center.join('-')
    if (center === this.props.occupiedHex) {
      return { fill: 'red', stroke: 'yellow' }
    } else {
      return { fill: this.props.texture }
    }
  },
  render () {
    return (
      <path
        style={this.displayOccupationStatus()}
        className={`hex ${this.props.hexSpecs.pos.join('-')}`}
        d={this.hexSides()}
        onClick={this.handleClick}
      />
    )
  }
})

const mapStateToProps = (state) => {
  return {
    playerTop: state.playerTop,
    playerLeft: state.playerLeft,
    occupiedHex: state.occupiedHex
  }
}

export default connect(mapStateToProps)(Hex)
