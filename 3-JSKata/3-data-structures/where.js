function where(arr, searchDetails) {
  const keys = Object.keys(searchDetails)
  results = arr.filter(function (e) {
    matchingKeys = keys.filter((key) => {
      return e.hasOwnProperty(key) && e[key] == searchDetails[key]
    })
    return matchingKeys.length == keys.length
  })
  return results
}

module.exports = where
