function find(arr, searchDetails) {
  const key = Object.keys(searchDetails)[0]
  for (i = 0; i < arr.length; i++) {
    if (arr[i][key] == searchDetails[key]) {
      return arr[i]
    }
  }
}

module.exports = find
