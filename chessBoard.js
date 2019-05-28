/*jshint esversion:6*/

function generateBoard(white, black){
  let chessBoard = [];
  let columns = 8;

  let whiteRow = white[0], whiteColumn = white[1];
  let blackRow = black[0], blackColumn = black[1];

  for (var i=columns; i--;){
    let rows = [0, 0, 0, 0, 0, 0, 0, 0];
    chessBoard.push(rows);
  }

chessBoard[whiteColumn] [whiteRow]= 1;
chessBoard[blackColumn][blackRow] = 1;

return chessBoard;
}// end of generateBoard fn

//queenThreat will take returned chessBoard with both queens places

function queenThreat(queenArray){
let threat = false;
let queensLocations = []; //an array storing 2 arrays of x&y coords

  for (var row of queenArray){
    for (var spot of row){
      if (spot === 1){
          queensLocations.push([row.indexOf(spot), queenArray.indexOf(row)]);
        break;
  }}}

//check if queens are in same row:
  if (queensLocations[0][0] === queensLocations[1][0]){
      threat = true;
  }
//check if queens are in same column:
  if (queensLocations[0][1] === queensLocations[1][1]){
    threat = true;
  }

//check if queens are in diagonal lines:
//therefore first's queens x to second queens y
//(queensLocation[][0]), only need to check downward
  for (var z = 1; z < 8;){
    if (queensLocations[0][1] === queensLocations[1][0]*(+ z || - z)){
      threat = true;
    }
    z += 2;
  }
    console.log(queensLocations);

  if (threat){
    return "The Queens are in positions of threat";
  } else {
    return "The Queens are no threat";
  }
}// end of queenThreat fn


/************************* CHESS MATCH 1 ***************************/

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));



/************************* CHESS MATCH 2 **************************/

// let whiteQueen = [0, 0];
// let blackQueen = [7, 5];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));



/*________EXPECTED OUTPUT ONE ________*/

// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true


/*________EXPECTED OUTPUT________*/

// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false
