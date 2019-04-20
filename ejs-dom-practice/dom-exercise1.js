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

//create 2 arrays to store keys for making heading titles and
//create MOUNTAINS as an array of arrays for each object's (mountain's) values
var mountainsArray = [];
var headingsArray = [];

MOUNTAINS.forEach(function(mountObj){
  headingsArray.push(Object.keys(mountObj));
  mountainsArray.push(Object.values(mountObj));
});


//run through headingsArray once to capture keys for heading titles
for (var h = 0; h < headingsArray.length; h++){
 if (h === 0) {
  var titleOne = document.createElement("th");
    titleOne.innerHTML = headingsArray[0][0];
    row.appendChild(titleOne);

  var titleTwo = document.createElement("th");
    titleTwo.innerHTML = headingsArray[0][1];
    row.appendChild(titleTwo);

  var titleThree = document.createElement("th");
    titleThree.innerHTML = headingsArray[0][2];
    row.appendChild(titleThree);
     break;
    }
  }

//loop through each mountain and add the 3 values per array into a new data cell
for (var i = 0; i < mountainsArray.length; i++) {
var newRow = table.insertRow();

  var newDataName = document.createElement("td");
    newRow.appendChild(newDataName);
  var newName = mountainsArray[i][0];
    newDataName.innerHTML = newName;

  var newDataHeight = document.createElement("td");
    newRow.appendChild(newDataHeight);
  var newHeight = mountainsArray[i][1];
    newDataHeight.innerHTML = newHeight;

//style numerical values right per challenge question
      var att = document.createAttribute("style");
        att.value = 'text-align: right;';
        newDataHeight.setAttributeNode(att);

  var newDataPlace = document.createElement("td");
    newRow.appendChild(newDataPlace);
  var newPlace = mountainsArray[i][2];
    newDataPlace.innerHTML = newPlace;
  }


console.log(mountainsArray);
