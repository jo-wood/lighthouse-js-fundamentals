/*jshint esversion:6*/

let repeatNumbers = function(data) {

let repeatValue;
let repeatCount;
let result = "";

  for (let i = 0; i < data.length; i++){
    repeatValue = data[i][0].toString();
    repeatCount = data[i][1];

    for (let j = 0; j < repeatCount; j++){
      result += repeatValue;
    }

  if (data.length === 1){
      return result;
   } else if (i < data.length - 1){
      result +=  ", ";
   }
  }

return result;

};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
