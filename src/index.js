
exports.min = function min (array) {
  if(typeof array == 'undefined' || array.length == 0) {
    return 0;
  }
  return array.slice().sort((el1, el2) => el1 - el2)[0];
}

exports.max = function max (array) {
  if(typeof array == 'undefined' || array.length == 0) {
    return 0;
  }
  return array.slice().sort((el1, el2) => el2 - el1)[0];
}

exports.avg = function avg (array) {
  if(typeof array == 'undefined' || array.length == 0) {
    return 0;
  }
  let arrSum = array.reduce((sum, element) => sum += element, 0);
  return arrSum / array.length;
}
