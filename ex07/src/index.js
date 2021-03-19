var firstArr = [
  [13, 27, 18, 26],
  [5, 4, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

var secondArr = [
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
];

var thirdArr = [
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, 10, 18, 21],
  [72, 3, 17, 10],
];

function largestNumFromArr(arr) {
  var numArray = [...arr];
  var maxNumArray = [];
  var max = 0;

  for (var i = 0; i < numArray.length; i++) {
    for (var j = 0; j < numArray[i].length; j++) {
      if (numArray[i][j] > max) {
        max = numArray[i][j];
      }
    }
    maxNumArray.push(max);
  }

  return maxNumArray;
}
console.log(largestNumFromArr(firstArr));
console.log(largestNumFromArr(secondArr));
console.log(largestNumFromArr(thirdArr));

module.exports = largestNumFromArr;
