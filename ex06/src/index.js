var firstArray = [[2], [5, 6, 7], [8, 9]];
var secondArray = [[2.5, 2], [0.5, 0.2], [8]];
var thirdArray = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9],
];

function multiplyArrayFunction(arr) {
  var myArray = [...arr];
  var product = 1;
  var sum = 0;

  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
      product *= myArray[i][j];
      sum += myArray[i][j];
    }
  }

  return {
    product,
    sum,
  };
}
console.log(multiplyArrayFunction(firstArray));
console.log(multiplyArrayFunction(secondArray));
console.log(multiplyArrayFunction(thirdArray));

module.exports = multiplyArrayFunction;
