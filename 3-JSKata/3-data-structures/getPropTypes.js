function getPropTypes(obj) {
  const arr = []
  Object.keys(obj).forEach((key) => {
    arr.push(typeof obj[key])
  })
  return arr
}

module.exports = getPropTypes
