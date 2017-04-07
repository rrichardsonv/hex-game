import { calculateGridCenters, makeHexagons } from './GameFunctions'
import { BoardStats, HexStats } from './GameConstants'

const { boardHeight, boardWidth, hexYSpacing, hexXSpacing, boardBorder } = BoardStats

const Grid = makeHexagons(calculateGridCenters(boardHeight, boardWidth, hexYSpacing, hexXSpacing, boardBorder), HexStats.hexSize)

export default Grid
