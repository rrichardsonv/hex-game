import { SET_PLAYER_TOP, SET_PLAYER_LEFT, SET_OCCUPIED_HEX } from './actions'

export function setPlayerTop (playerTop) {
  return { type: SET_PLAYER_TOP, playerTop }
}

export function setPlayerLeft (playerLeft) {
  return { type: SET_PLAYER_LEFT, playerLeft }
}
export function setOccupiedHex (occupiedHex) {
  return { type: SET_OCCUPIED_HEX, occupiedHex }
}

