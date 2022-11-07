function getBoolean() {
  return false
}

function getFunction() {
  return () => {}
}

function getNull() {
  return null
}

function getNumber() {
  return 0
}

function getObject() {
  return {}
}

function getString() {
  return ''
}

module.exports = {
  getBoolean,
  getFunction,
  getNull,
  getNumber,
  getObject,
  getString,
}
