function splitArrayInGroups(arr, n) {
  var result = [];
  var iterations = 0;

  for (var i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
    iterations++;
    {
      if (iterations === n) {
        break;
      }
    }
  }
  return result;
}
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

module.exports = splitArrayInGroups;
