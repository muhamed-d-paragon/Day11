var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  var average = 0;

  for (var i = 0; i < newTemps.length; i++) {
    for (var j = 0; j < newTemps[i].length; j++) {
      average = average + newTemps[i][j];
    }
    averageDayTemp.push(average / newTemps[i].length);
    average = 0;
  }

  return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
