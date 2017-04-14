import React from 'react'
import { connect } from 'react-redux'
import { setOccupiedHex } from './redux/actionCreators'
import '../public/css/Hex.css'

const { shape, string, arrayOf, number, func, bool } = React.PropTypes

const Hex = React.createClass({
  propTypes: {
    hexSpecs: shape({
      center: arrayOf(number),
      pos: arrayOf(number),
      points: arrayOf(arrayOf(number))
    }),
    texture: string,
    occupiedHex: string,
    dispatch: func,
    occupied: bool
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
    if (this.props.occupied) {
      const pos = this.props.hexSpecs.pos.join('-')
      this.props.dispatch(setOccupiedHex(pos))
    }
  },
  displayOccupationStatus () {
    if (this.props.occupied) {
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
      />
    )
  }
})
const mapStateToProps = (state) => {
  return {
    occupiedHex: state.occupiedHex
  }
}

export default connect(mapStateToProps)(Hex)
