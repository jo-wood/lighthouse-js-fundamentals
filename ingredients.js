var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("*Loop 1:");
var ingredient = 0;

while (ingredient < ingredients.length) {
  console.log(ingredients[ingredient]);
  ingredient++;
}

console.log("*Loop 2:");
// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


console.log("*Loop 3:");
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = ingredients.length - 1; i > 0; i--) {
  console.log(ingredients[i]);
}
