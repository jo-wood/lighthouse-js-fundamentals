/*jshint esversion:6*/

let talkingCalendar = function(date) {
// final variables
  let month;
  let day;
  let readableDate;

//incoming date is string of YYYY/MM/DD format
let yearNumber = date.slice(0,4);
let monthNumber = date.slice(5,7);
let dayAsString = date.slice(8,10);

//convert day numbers to readable values
let dayNumber = parseInt(dayAsString, 10);

if (dayNumber < 4 || (dayNumber > 20 && dayNumber < 24) || (dayNumber === 31)){
  switch (dayNumber){
    case 1:
      day = "1st, ";
      break;
    case 2:
      day = "2nd, ";
      break;
    case 3:
      day = "3rd, ";
      break;
    case 21:
      day = "21st, ";
      break;
    case 22:
      day = "22nd, ";
      break;
    case 23:
      day = "23rd, ";
      break;
    case 31:
      day = "31st, ";
      break;
  }
} else {
  day = dayNumber.toString() + "th, ";
}

//convert month number to month name
switch (monthNumber) {
    case '01':
      month = "January ";
      break;
    case '02':
      month = "February ";
      break;
    case '03':
      month = "March ";
      break;
    case '04':
      month = "April ";
      break;
    case '05':
      month = "May ";
      break;
    case '06':
      month = "June ";
      break;
    case '07':
      month = "July ";
      break;
    case '08':
      month = "August ";
      break;
    case '09':
      month = "September ";
      break;
    case '10':
      month = "October ";
      break;
    case '11':
      month = "November ";
      break;
    case '12':
      month = "December ";
      break;
}

readableDate = month + day + yearNumber;
return readableDate;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


/* NOTES FROM WK1D1 lecture through this example */
// MDN on split()
// var components = date.split('/');
// then year will be components[0] etc.
// should use parseInt on the month instead of typing
//    out the string
// should use parseInt with 2nd parameter to tell
//    how many digits it should look for ('0x12') would
//    output 18, but if pass 10 as 2nd arg, will
//    stop at the x
// make the month its own function
//    before talkingCalendar (let convertMonth = function(string))
//    then replace teh month = with "return 'november'"
//    then didn't use break because return 'november';
//    will stop it
//  can use var on function expression to hoist
//    this will prevent issue and won't immediately invoke
// instead logged number day and another var daySuffix
//    then if day === 1 || etc.
//    make daySuffix = "st"; etc
//    then else if day === 2 etc
//
//
