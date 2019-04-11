/*jshint esversion:6*/

function conditionalSum(arr, cond) {

  let conditionArray = [];
  let sum = 0;

  if (cond === "odd") {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        conditionArray.push(arr[i]);
      }
    }

  } else if (cond === "even") {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] % 2 === 0) {
        conditionArray.push(arr[j]);
      }
    }
  }

  if (conditionArray.length === 0){
    return sum;
  } else {
    for (var z = 0; z < conditionArray.length; z++) {
      sum = sum + conditionArray[z];
    }
    return sum;
  }

}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
