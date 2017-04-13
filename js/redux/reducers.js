import { SET_PLAYER_LEFT, SET_PLAYER_TOP, SET_OCCUPIED_HEX } from './actions'

const DEFAULT_STATE = {
  playerTop: 13,
  playerLeft: 20,
  occupiedHex: '0-0'
}

const setPlayerTop = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {playerTop: action.playerTop})
  return newState
}

const setPlayerLeft = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {playerLeft: action.playerLeft})
  return newState
}
const setOccupiedHex = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {occupiedHex: action.occupiedHex})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PLAYER_TOP:
      return setPlayerTop(state, action)
    case SET_PLAYER_LEFT:
      return setPlayerLeft(state, action)
    case SET_OCCUPIED_HEX:
      return setOccupiedHex(state, action)
    default:
      return state
  }
}

export default rootReducer
