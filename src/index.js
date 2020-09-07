const isEmptyArray = array => (!array || array.length === 0) ? true : false

exports.min = function min (array) {
  return isEmptyArray(array) ? 0 : array.sort((a, b) => a - b)[0]
}

exports.max = function max (array) {
  return isEmptyArray(array) ? 0 : array.sort((a,b) => b - a)[0]
}

exports.avg = function avg (array) {
  return isEmptyArray(array) ? 0 : array.reduce((acc, cur) => acc + cur) / array.length  
}
