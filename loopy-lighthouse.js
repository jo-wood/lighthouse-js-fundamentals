function loopyLighthouse() {
  var toDisplay;

  for (var i = 100; i < 201; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      toDisplay = "LoopyLighthouse";
    } else if (i % 3 === 0) {
      toDisplay = "Loopy";
    } else if (i % 4 === 0) {
      toDisplay = "Lighthouse";
    } else {
      toDisplay = i;
    }
    console.log(toDisplay);

  }// end of for loop

}


loopyLighthouse();
