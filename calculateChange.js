/*jshint esversion:6*/

let calculateChange = function(total, cash) {

let difference = cash - total;
let result = 1;

let money = {
  twentyBill:difference/2000,
  tenBill:difference/1000,
  fiveBill:difference/500,
  toonie:difference/200,
  loonie:difference/100,
  quarter:difference/25,
  dime:difference/10,
  nickel:difference/5,
  penny:difference/1
};

console.log(money);


let change = {
  twentyBill:0,
  tenBill:0,
  fiveBill:0,
  toonie:0,
  loonie:0,
  quarter:0,
  dime:0,
  nickel:0,
  penny:0
};

function checkChange(changingDiff) {

  if (changingDiff > 499) {
    if (money.twentyBill >= 1 ){
      let howMany20Bill = Math.floor(changingDiff/2000);
      change.twentyBill = howMany20Bill;
      changingDiff -= howMany20Bill*2000;
    } else if (money.tenBill >= 1  ){
        let howMany10Bill = Math.floor(changingDiff/1000);
        change.tenBill = howMany10Bill;
        changingDiff -= howMany10Bill*1000;
      } else if (money.fiveBill >= 1 ){
          let howMany5Bill = Math.floor(changingDiff/500);
          change.fiveBill = howMany5Bill;
          changingDiff -= howMany5Bill*500;
        }
  } else if (changingDiff < 500 && changingDiff > 24){
    if (money.toonie >= 1 ){
      let howManyToonies = Math.floor(changingDiff/200);
      change.toonie = howManyToonies;
      changingDiff -= howManyToonies*200;
    } else if (money.loonie >= 1  ){
        let howManyLoonies = Math.floor(changingDiff/100);
        change.loonie = howManyLoonies;
        changingDiff-= howManyLoonies*100;
      } else if (money.quarter >= 1 ){
          let howManyQuarters = Math.floor(changingDiff/25);
          change.quarter = howManyQuarters;
          changingDiff -= howManyQuarters*25;
        }
  } else if (changingDiff < 25){
    if (money.dime >= 1 ){
      let howManyDimes = Math.floor(changingDiff/10);
      change.dime = howManyDimes;
      changingDiff -= howManyDimes*10;
    } else if (money.nickel >= 1  ){
        let howManyNickels = Math.floor(changingDiff/5);
        change.nickel = howManyNickels;
        changingDiff -= howManyNickels*5;
      } else if (money.penny >= 1 ){
          let howManyPennies = Math.floor(changingDiff/1);
          change.penny = howManyPennies;
          changingDiff -= howManyPennies*1;
        }
  }

return changingDiff;
}// end of checkChange


for (let check = difference; check > 0; ) {
  result = checkChange(check);
  check -= result;
}




return change;
};


console.log(calculateChange(1787, 2000));
//console.log(calculateChange(2623, 4000));
//console.log(calculateChange(501, 1000));
