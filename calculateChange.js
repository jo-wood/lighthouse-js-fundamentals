/*jshint esversion:6*/

let calculateChange = function(total, cash) {

let difference = cash - total;
let result = {};
let money = [
  ['twentyBill', 2000],
  ['tenBill', 1000],
  ['fiveBill', 500],
  ['toonie', 200],
  ['loonie', 100],
  ['dime', 10],
  ['nickel', 5],
  ['penny', 1]
];

for (var j = 0; j < money.length; j++) {
  let checkDenom = Math.floor(difference/money[j][1]);
  if (checkDenom > 0 ){
    result[money[j][0]] = checkDenom;
    difference -= checkDenom*money[j][1];
  }
}

return result;

};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
