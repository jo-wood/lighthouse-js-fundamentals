/*jshint esversion:6*/

const urlDecode = function(text) {

let findSpaces = text.split("%20");
let spacedString = findSpaces.join(" ");
let itemProps = spacedString.split("&");
let results = {};

for (var prop of itemProps) {
  let keysAndValues;
  if (prop.includes('=')){
    keysAndValues = prop.split("=");
    for (var i = 1; i < keysAndValues.length; i++){
      results[keysAndValues[0]] = keysAndValues[i];
    }
  }

}

return results;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


/************expected output****************/
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"
