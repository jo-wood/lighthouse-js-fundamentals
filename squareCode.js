/*jshint esversion:6*/

const squareCode = function(message) {

let stringArray = message.split(" ");
let connectString = stringArray.join("");
let square = Math.ceil(Math.sqrt(connectString.length));

let result = "";

  let newRow = [];
  let tempArray = connectString.split("");
  let column;

  for (var i=square; i--;) {
    let columns = tempArray.splice(0, square);
    newRow.push(columns);
    column = newRow[0];
  }


  for (let z = 0; z < square ; z++){
    for (let j = 1; j < square; j++){
      if (newRow[j][z] !== undefined)
      column[z] += newRow[j][z];
    }
  result += column[z] + " ";
  }

return result;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


/*********** EXPECTED OUTPUT ***********/
// clu hlt io
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
