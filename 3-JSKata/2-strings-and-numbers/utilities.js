function getType(thing) {
  return typeof thing
}

function isNumber(thing) {
  return typeof thing === 'number'
}

function toNumber(str) {
  return parseInt(str)
}

function isStringNumber(str) {
  return !isNaN(str)
}

function add(a, b) {
  return a + b
}

function addStrings(a, b) {
  return (parseInt(a) + parseInt(b)).toString()
}

function addStringsOrNumbers(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a + b
  }
  return (parseInt(a) + parseInt(b)).toString()
}

function isEmail(str) {
  return str.includes('@') && str.includes('.')
}

function countIf(array, fn) {
  return array.filter(fn).length
}

function filterStringsWithCommas(str) {
  return str.includes(',')
}

function splitStringByCommas(str) {
  return str.split(',')
}

module.exports = {
  getType,
  isNumber,
  toNumber,
  isStringNumber,
  add,
  addStrings,
  addStringsOrNumbers,
  isEmail,
  countIf,
  filterStringsWithCommas,
  splitStringByCommas,
}
