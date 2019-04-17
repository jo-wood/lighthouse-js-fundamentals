function loopyLighthouse(range, multiples, words) {
  var count;
  var multipleOne;
  var multipleTwo;
  var errorMessage = "verified 2 multipliers";

  function verifyMultiples(multiples) {
    if (multiples.length === 2) {
      multipleOne = multiples[0];
      multipleTwo = multiples[1];
    } else {
      errorMessage = "must have array with 2 multipliers";
    }
    return (multipleOne, multipleTwo, errorMessage);
  }

  verifyMultiples(multiples);

  for (var i = range[0]; i < range[1] + 1 ; i++) {
    count = i;
    if (count % multipleOne === 0 && count % multipleTwo === 0) {
      count = words[0] + words[1];
    } else if (count % multipleOne === 0) {
      count = words[0];
    } else if (count % multipleTwo === 0) {
      count = words[1];
    }
    console.log(count);

  }// end of for loop

}// end of loopyLighthouse


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
