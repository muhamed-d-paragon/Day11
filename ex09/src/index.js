function myBouncer(arr) {
  return arr.filter(function (val) {
    return (
      val !== false &&
      val !== "" &&
      !Number.isNaN(val) &&
      val !== undefined &&
      val !== 0 &&
      val !== null
    );
  });
}

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));

module.exports = myBouncer;
