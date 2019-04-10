function range(start, end, step) {
  var array = [];
  if (start !== undefined && end !== undefined && step !== undefined){
    if (start < end) {
      array.push(start);
      if (step > 0) {
        var rangeLength = Math.floor((end - start) / step) + 1;
        for (var i = 1; i < rangeLength; i++) {
          var next = array[i - 1] + step;
          array.push(next);
        }
      } else if (step < 0) {
        array = [];
      }
    }
  }
  return array;
}// end function

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
