/*jshint esversion:6*/

const makeCase = function(input, style) {

  let result = [];
  let styleArray;
  if (typeof style === 'string') {
    styleArray = [style];
  } else
    styleArray = style;

  let lowercase = input.toLowerCase();
  let lowerInput = input.split(" ");
  let uppercase = lowerInput.map(word => {
    let caps = word.slice(0,1).toUpperCase();
    let endings = word.slice(1, word.length);
    return caps + endings;
  });

let newString = "";

for (var type of styleArray) {

  switch (type) {

    case "camel":
      for (var i = 0; i < uppercase.length; i++) {
        if (i === 0){
          newString += uppercase[i].toLowerCase();
        } else {
          newString += uppercase[i];
        }
      }
      result.push(newString);
    break;

    case "pascal":
      let pascal = uppercase.join('');
      newString = pascal;
      result.push(newString);
    break;

    case "snake":
      let snake = lowerInput.join('_');
      newString = snake;
      result.push(newString);
    break;

    case "kebab":
      let kebab = lowerInput.join('-');
      newString = kebab;
      result.push(newString);
    break;

    case "title":
      let title = uppercase.join(' ');
      newString = title;
      result.push(newString);
    break;

    case "vowel":
      let holdString = lowerInput.join(' ');
      for (let z = 0; z < holdString.length; z++){

        switch (holdString[z]){
          case 'a':
            newString += holdString[z].toUpperCase();
            break;
          case 'e':
            newString += holdString[z].toUpperCase();
            break;
          case 'i':
            newString += holdString[z].toUpperCase();
            break;
          case 'o':
            newString += holdString[z].toUpperCase();
            break;
          case 'u':
            newString += holdString[z].toUpperCase();
            break;

        default:
          newString += holdString[z];
       }
      }
      result.push(newString);
    break;

    case "consonant":
      let letter = lowerInput.join('_');
      for (let foo = 0; foo < letter.length; foo++){
        let char = letter[foo];
        if (char === 'a' || char === 'e' ||char ===  'i' ||char === 'o' || char === 'u'){
          newString += letter[foo];
        } else {
         newString += letter[foo].toUpperCase();
        }
      }
     result.push(newString);
    break;

    case "upper":
      let upper = lowerInput.join('_');
      newString = upper.toUpperCase();
      result.push(newString);
    break;


  } //end of switch for types

} // end of each style type

console.log(result);

return result;

};
makeCase("this is a string", "camel");
makeCase("this is a string", "pascal");
makeCase("this is a string", "snake");
makeCase("this is a string", "kebab");
makeCase("this is a string", "title");
makeCase("this is a string", "vowel");
makeCase("this is a string", "consonant");
makeCase("this is a string", "upper");
makeCase("this is a string", ["upper", "snake"]);
