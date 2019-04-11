/*jshint esversion:6*/

let sumLargestNumbers = function(data) {

  let first = data[0];
  let second;
  let largestSum;

  if (data !== undefined && data.length > 1) {

    if (data.length < 3) {
      largestSum = data[0] + data[1];
      return largestSum;

    } else {

      for (var i = 1; i < data.length; i++) {
        if (data[i] > first) {
          second = first;
          first = data[i];
        } else if (data[i] > second && data[i] !== first) {
            second = data[i];
          }
      }

      largestSum = first + second;
      return largestSum;
    }
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
