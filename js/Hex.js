import React from 'react'
import '../public/css/Hex.css'

const { string, arrayOf, number } = React.PropTypes

const Hex = React.createClass({
  propTypes: {
    terrain: string,
    coords: arrayOf(arrayOf(number))
  },
  hexSides () {
    const coords = this.props.coords
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
  render () {
    return (
      <path className={`${this.props.terrain}`} d={this.hexSides()} />
    )
  }
})

export default Hex
