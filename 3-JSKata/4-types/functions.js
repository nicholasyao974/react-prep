function callsFunction(func) {
  func()
}

function callsProperty(obj) {
  obj.increment()
}

function filter(arr, func) {
  const filteredArr = []
  arr.forEach((element) => {
    if (func(element)) {
      filteredArr.push(element)
    }
  })
  return filteredArr
}

function find(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i]
    }
  }
}

function map(arr, func) {
  const newArr = []
  arr.forEach((element) => {
    newArr.push(func(element))
  })
  return newArr
}

module.exports = {
  callsFunction,
  callsProperty,
  filter,
  find,
  map,
}
