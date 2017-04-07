import dimensions from '../public/json/game.json'

let { height, width, border } = dimensions.game.board

let hexSize = dimensions.game.hex.size
let hexHeight = hexSize * 2
let hOffset = hexHeight * 3 / 4
let wOffset = hexHeight * Math.sqrt(3) / 2

export const Terrain = dimensions.game.terrain[0]

export const BoardStats = {
  boardHeight: height,
  boardWidth: width,
  boardBorder: border,
  hexYSpacing: hOffset,
  hexXSpacing: wOffset
}

export const HexStats = {
  hexHeight: hexHeight,
  hexSize: hexSize
}
