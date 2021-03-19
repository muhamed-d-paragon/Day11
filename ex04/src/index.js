var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  var monitorsList = [];
  var itemNumber = [1, 2, 3];

  for (var i = 0; i < newMonitorsList.length; i++) {
    monitorsList.push({ newMonitorsList, itemNumber });
  }

  return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
