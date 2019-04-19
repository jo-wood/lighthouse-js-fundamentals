var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];




  var root = document.querySelector("#mountains");
  var table = root.appendChild(document.createElement("table"));
  var row = table.appendChild(document.createElement("tr"));

  var rowOne = row;
  var titleOne = rowOne.appendChild(document.createElement("th"));
  var titleTwo = rowOne.appendChild(document.createElement("th"));
  var titleThree = rowOne.appendChild(document.createElement("th"));


function createTitles(MOUNTAINS) {

  var headOne = document.createTextNode("name");
    titleOne.appendChild(headOne);
  var headTwo = document.createTextNode("height");
    titleTwo.appendChild(headTwo);
  var headThree = document.createTextNode("place");
    titleThree.appendChild(headThree);
}

createTitles();


  var mountainsArray = [];

  MOUNTAINS.forEach(function(mountObj){
    mountainsArray.push(Object.values(mountObj));
  });


console.log(mountainsArray);


//     var amountOfRows = mountainsArray.length;

//   for (var j = 0; j < amountOfRows + 1; j++){

//     var nameData = document.createTextNode(mountainsArray[j][0]);

//     row.appendChild(nameData);
//   }



//   var namesArray = [];
//   var heightsArray = [];
//   var placesArray = [];

//   for (var i = 0; i < mountainsArray.length; i++) {
//     namesArray.push(mountainsArray[i][0]);
//     heightsArray.push(mountainsArray[i][1]);
//     placesArray.push(mountainsArray[i][2]);
//   }
