/*jshint esversion:6*/

let numberOfVowels = function(word) {

  let wordAsArray = word.split("");
  let vowelCount = 0;

  for (var i = 0; i < wordAsArray.length; i++) {
    switch (wordAsArray[i]){
      case 'a':
        vowelCount += 1;
        break;
      case 'e':
        vowelCount += 1;
        break;
      case 'i':
        vowelCount += 1;
        break;
      case 'o':
        vowelCount += 1;
        break;
      case 'u':
        vowelCount += 1;
        break;
    }
  }
  return vowelCount;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
