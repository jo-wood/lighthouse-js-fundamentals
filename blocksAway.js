/*jshint esversion:6*/

const blocksAway = function(directions) {

let directionsArray = [];
let blocksArray = [];
let columns = 0;
let rows = 0;

for (var step of directions) {
  if(directions.indexOf(step) % 2 === 0 || directions.indexOf(step) === 0){
    directionsArray.push(step);
  } else {
    blocksArray.push(step);
  }
}

for (let directionIndex = 0; directionIndex < directionsArray.length; directionIndex++){
  let direction = directionsArray[directionIndex];

// handle edge cases of index 0 and 1
// need to refactor

    if (directionIndex ===  0) {
      if (direction === "right") {
        columns += blocksArray[directionIndex];
      } else if (direction === "left") {
          rows += blocksArray[directionIndex];
    }}

    if (directionIndex ===  1) {
      if (direction === "right") {
        columns += blocksArray[directionIndex];
      } else if (direction === "left") {
          rows += blocksArray[directionIndex];
    }}

    if (directionIndex > 1){
      if (direction === "right") {
          if (directionsArray[directionIndex - 1] === "right"){
            rows -= blocksArray[directionIndex];
          } else {
            columns += blocksArray[directionIndex];
          }
      } else if (direction === "left") {
          if (directionsArray[directionIndex - 1]  === "left"){
            columns -= blocksArray[directionIndex];
          } else {
              rows += blocksArray[directionIndex];
            }
      }}

}//directionsArray loop

if (columns < 0){
  columns = 0;
} if (rows < 0){
  rows = 0;
}

return {
  east: columns,
  north: rows
};

}; //blocksAway fn

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));



/********* EXPECTED OUTPUT *********/

/**** taxi always starts at bottom left of grid*/
/**** therefore only east and north coords required*/

// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}
