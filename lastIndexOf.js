function lastIndexOf(array, value) {
  var lastAppeared = -1;
  var i = array.length - 1;

  if (array !== undefined) {
    for (i; i >= 0; i--) {
      if (array[i] === value) {
        lastAppeared = i;
        break;
      }
    }
  }

  return lastAppeared;
}// end of function

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// good example of problem-solving
// some cases were correct, others weren't
// ones that were wrong were printing the first index - noted
// that the checks continued through
// realized need to break out of my loop once found
// as I am already going backward in the array
