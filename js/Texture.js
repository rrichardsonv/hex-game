import React from 'react'
const { shape, string } = React.PropTypes

const Texture = React.createClass({
  propTypes: {
    color: shape({
      name: string,
      highlight: string,
      main: string
    })
  },
  render () {
    const { name, highlight, main } = this.props.color
    return (
      <linearGradient id={name}>
        <stop offset='5%' stopColor={highlight} />
        <stop offset='95%' stopColor={main} />
      </linearGradient>
    )
  }
})

export default Texture
