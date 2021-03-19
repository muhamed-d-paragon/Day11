function mySplice(arr1, arr2, n) {
  var newArrTwo = arr2.slice();
  var newArrOne = arr1.reverse();
  newArrTwo.splice(n, 0, ...newArrOne);
  return newArrTwo;
}
console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;
