import React from 'react'
import '../public/css/Player.css'
import { connect } from 'react-redux'
import { setPlayerLeft, setPlayerTop } from './redux/actionCreators'
const { number, func } = React.PropTypes

const Player = React.createClass({
  propTypes: {
    playerTop: number,
    playerLeft: number,
    dispatch: func
  },
  handleKeyDown (event) {
    if (event.keyCode === 38) {
      this.moveUp()
    }
    if (event.keyCode === 40) {
      this.moveDown()
    }
    if (event.keyCode === 39) {
      this.moveRight()
    }
    if (event.keyCode === 37) {
      this.moveLeft()
    }
  },
  moveLeft () {
    const newLeft = -10 + this.props.playerLeft
    this.props.dispatch(setPlayerLeft(newLeft))
  },
  moveRight () {
    const newLeft = 10 + this.props.playerLeft
    this.props.dispatch(setPlayerLeft(newLeft))
  },
  moveUp () {
    const newTop = -10 + this.props.playerTop
    this.props.dispatch(setPlayerTop(newTop))
  },
  moveDown () {
    const newTop = 10 + this.props.playerTop
    this.props.dispatch(setPlayerTop(newTop))
  },
  componentWillMount () {
    document.addEventListener('keydown', this.handleKeyDown, false)
  },
  render () {
    const { playerTop, playerLeft } = this.props
    return (
      <div
        style={{top: playerTop + 'px', left: playerLeft + 'px'}}
        className='Player'
      >
        <i className='fa fa-child fa-2x' />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    playerTop: state.playerTop,
    playerLeft: state.playerLeft

  }
}

export default connect(mapStateToProps)(Player)
