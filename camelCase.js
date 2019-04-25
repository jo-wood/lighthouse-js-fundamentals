/*jshint esversion:6*/

let camelCase = function(data) {

  let stringArray = data.split(" ");
  let firstWord = stringArray[0];
  let result = firstWord;

  if (stringArray.length === 1) {
  return result;
  } else {
    for (let i = 1; i < stringArray.length; i++){
      let capFirst = stringArray[i][0].toUpperCase();
      let camelWords = capFirst;
      for (let j = 1; j < stringArray[i].length; j++){
        camelWords += stringArray[i][j];
      } result += camelWords;
    }
  return result;
  }
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
