/*jshint esversion:6*/

let urlEncode = function(text) {

  let trimmedText = text.trim();
  let amountOfWords = trimmedText.split(" ");

  for (var i = 0; i < amountOfWords.length -1 ; i++) {
    amountOfWords[i] = amountOfWords[i].toString() + "%20";
  }

  return amountOfWords.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
