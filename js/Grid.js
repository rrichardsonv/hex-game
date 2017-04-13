import { calculateGridCenters, makeHexagons } from './GameFunctions'
import { BoardStats, HexStats, Terrain } from './GameConstants'

const { boardHeight, boardWidth, hexYSpacing, hexXSpacing, boardBorder } = BoardStats

const hexTerrains = Terrain.map((t) => {
  return (
    {name: t.name, icon: t.icon}
  )
})
const Grid = makeHexagons(calculateGridCenters(boardHeight, boardWidth, hexYSpacing, hexXSpacing, boardBorder), HexStats.hexSize, hexTerrains)

export default Grid
