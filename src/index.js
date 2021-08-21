
exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  if(typeof array == 'undefined' || array.length == 0) {
    return 0;
  }
  let arrSum = array.reduce((sum, element) => sum += element, 0);
  return arrSum / array.length;
}
