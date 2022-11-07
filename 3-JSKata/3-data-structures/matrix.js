function getMatrix(n) {
  arr = []
  for (let i = 0; i < n; i++) {
    arr.push(Array(n).fill(0))
  }
  return arr
}

function updateMatrix(matrix, coords, value) {
  matrix[coords[0]][coords[1]] = value
  return matrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
