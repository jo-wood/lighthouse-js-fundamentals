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

  var titleOne = document.createElement("th");
    titleOne.innerHTML = "name";
    rowOne.appendChild(titleOne);
  var titleTwo = document.createElement("th");
    titleTwo.innerHTML = "height"
    rowOne.appendChild(titleTwo);
  var titleThree = document.createElement("th");
    titleThree.innerHTML = "place";
    rowOne.appendChild(titleThree);


  var mountainsArray = [];

  MOUNTAINS.forEach(function(mountObj){
    mountainsArray.push(Object.values(mountObj));
  });

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

    var newDataPlace = document.createElement("td");
      newRow.appendChild(newDataPlace);
    var newPlace = mountainsArray[i][2];
      newDataPlace.innerHTML = newPlace;


  }



console.log(mountainsArray);


//     var amountOfRows = mountainsArray.length;
