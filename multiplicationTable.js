/*jshint esversion:6*/

const multiplicationTable = function(maxValue) {

let axisX = [];
let table = "";

  if (maxValue === 1) return "1" + "\n";

  for (let j = 1; j <= maxValue; j++){
    let firstNumber = j;
    let counter = 1;
      for (let i = 0; i < maxValue; i++ ){
        let nextX = firstNumber*counter;
         axisX[i] = nextX;
         counter ++;
      }
    table += axisX.join(" ") + "\n";
  }

return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
