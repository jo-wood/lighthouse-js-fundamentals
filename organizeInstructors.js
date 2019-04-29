/*jshint esversion:6*/

const organizeInstructors = function(instructors) {


let result = {};
let course = [];

instructors.map(person => {
  course.push([person.name, person.course]);
});

for (var i = 0; i < course.length; i++) {
  if (!result[course[i][1]]){
    result[course[i][1]] = [];
  }
  result[course[i][1]].push(course[i][0]);
}

return result;

};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
