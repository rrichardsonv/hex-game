const buildGrid = (maxHeight, maxWidth, yOff, xOff, border) => {
  var grid = []
  var x = 0 + border
  var y = 0 + border
  var j = (maxHeight - border * 2) / yOff
  var k = (maxWidth - border * 2) / xOff
  for (var row = 0; row < j; row++) {
    if (row % 2 === 0) {
      var col
      var coords
      for (col = 0; col < k; col++) {
        coords = []
        coords[0] = x + (col * xOff)
        coords[1] = y + (row * yOff)
        grid.push({coords: coords, pos: [row, col]})
      }
    } else {
      for (col = 0; col < k; col++) {
        coords = []
        coords[0] = x + ((col + 0.5) * xOff)
        coords[1] = y + (row * yOff)
        grid.push({coords: coords, pos: [row, col]})
      }
    }
    col = 0
  }
  return grid
}

var hexCorner = (center, size, i) => {
  var angleDeg = 60 * i + 30
  var angleRad = Math.PI / 180 * angleDeg
  var xy = []
  xy[0] = Math.round(center[0] + size * Math.cos(angleRad))
  xy[1] = Math.round(center[1] + size * Math.sin(angleRad))
  return xy
}

var hexagonPoints = (center, size) => {
  var pointsArr = []
  for (var i = 1; i < 7; i++) {
    pointsArr[i - 1] = hexCorner(center, size, i)
  }
  return pointsArr
}

var hexagon = (args) => {
  return {
    points: hexagonPoints(args.center, args.size),
    center: args.center,
    pos: args.pos,
    terrain: args.terrain,
    icon: args.icon
  }
}

var rand = (n) => {
  return (Math.floor(Math.random() * n))
}

// var terrainDetail = (hexPoint, detailStart, path) => {
//   var relativeStart = [hexPoint[0] + detailStart[0], hexPoint[0] + detailStart[0]]
//   return `M${relativeStart} ${path}`
// }

// export function makeTerrainPath (hexPoint, detailStart, path) {
//   return terrainDetail(hexPoint, detailStart, path)
// }

export function randomTerrain (terrains) {
  return terrains[rand((terrains.length))]
}

export function makeHexagons (gridOfCenters, hexSize, terrains) {
  return (
    gridOfCenters.map((item) => {
      var terrain = randomTerrain(terrains)
      return (
        hexagon({terrain: terrain.name, center: item.coords, size: hexSize, pos: item.pos, icon: terrain.icon})
      )
    })
  )
}

export function calculateGridCenters (maxH, maxW, yOff, xOff, border) {
  return buildGrid(maxH, maxW, yOff, xOff, border)
}
