var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  myNewPets.push("Bird", "Fish");
  var firstPet = myNewPets.pop();
  var lastPet = myNewPets.shift();
  myNewPets.unshift("Lion");

  return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
