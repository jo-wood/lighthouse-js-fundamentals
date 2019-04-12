/*jshint esversion: 6*/

let instructorWithLongestName = function(instructors) {

  let longestCount = 0;
  let nameLocation;

  for (var i = 0; i < instructors.length; i ++) {
    let checkName = instructors[i].name;
    if (checkName.length > longestCount) {
      longestCount = checkName.length;
      nameLocation = i;
    }
   }

 return instructors[nameLocation];

};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
