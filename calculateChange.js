/*jshint esversion:6*/

let calculateChange = function(total, cash) {

/******re-try attempt one******/
let difference = cash - total;
let result;
let moneyValue = [
  ['twentyBill', 2000],
  ['tenBill', 1000],
  ['fiveBill', 500],
  ['toonie', 200],
  ['loonie', 100],
  ['dime', 10],
  ['nickel', 5],
  ['penny', 1]
];

let money = {
  twentyBill:Math.floor(difference/2000),
  tenBill:Math.floor(difference/1000),
  fiveBill:Math.floor(difference/500),
  toonie:Math.floor(difference/200),
  loonie:Math.floor(difference/100),
  quarter:Math.floor(difference/25),
  dime:Math.floor(difference/10),
  nickel:Math.floor(difference/5),
  penny:Math.floor(difference/1)
};

let storage = {
  "storeDiff": difference,
  "storeMoney": money
};
console.log(storage);

function findHighestDenom(changingDiff, change){

  if (changingDiff > 499) {
    if (money.twentyBill >= 1 ){
      let howMany20Bill = Math.floor(changingDiff/2000);
      money.twentyBill = howMany20Bill;
      difference -= howMany20Bill*2000;
    } else if (money.tenBill >= 1  ){
        let howMany10Bill = Math.floor(difference/1000);
        money.tenBill = howMany10Bill;
        difference -= howMany10Bill*1000;
      } else if (money.fiveBill >= 1 ){
          let howMany5Bill = Math.floor(difference/500);
          money.fiveBill = howMany5Bill;
          difference -= howMany5Bill*500;
        }
  } else if (changingDiff < 500 && changingDiff > 24){
    if (money.toonie >= 1 ){
      let howManyToonies = Math.floor(changingDiff/200);
      money.toonie = howManyToonies;
      difference -= howManyToonies*200;
    } else if (money.loonie >= 1  ){
        let howManyLoonies = Math.floor(changingDiff/100);
        money.loonie = howManyLoonies;
        difference-= howManyLoonies*100;
      } else if (money.quarter >= 1 ){
          let howManyQuarters = Math.floor(changingDiff/25);
          money.quarter = howManyQuarters;
          difference -= howManyQuarters*25;
        }
  } else if (changingDiff < 25){
    if (money.dime >= 1 ){
      let howManyDimes = Math.floor(changingDiff/10);
      money.dime = howManyDimes;
      difference -= howManyDimes*10;
    } else if (money.nickel >= 1  ){
        let howManyNickels = Math.floor(changingDiff/5);
        money.nickel = howManyNickels;
        difference -= howManyNickels*5;
      } else if (money.penny >= 1 ){
          let howManyPennies = Math.floor(changingDiff/1);
          money.penny = howManyPennies;
          difference -= howManyPennies*1;
        }
  }

  storage.storeDiff = difference;
  storage.storeMoney = money;

return;
}// end of newDiff




findHighestDenom(storage.storeDiff, storage.storeMoney);
console.log(storage);

let changeArray = [];

Object.keys(storage.storeMoney).forEach(key => {
  if (storage.storeMoney[key]> 0){
    changeArray.push([key, storage.storeMoney[key]]);
  }

});

let secondDenom = [];
  for (let i = 0; i < changeArray.length; i++ ){
    if (i === 0) {
      secondDenom.push(changeArray[i]);
    }

    if (changeArray[i][1] / storage.storeDiff >= 1){
        let multipler;
        changeArray[i][1] = Math.floor(changeArray[i][1] / storage.storeDiff);
//poor semantics to have function within loop?
        moneyValue.forEach(function(element){
          if (element[0] === changeArray[i][0]){
              multiplier = element[1];
            }
        });

      secondDenom.push(changeArray[i]);
      storage.storeDiff -= changeArray[i][1]*multiplier;
      result = findHighestDenom(storage.storeDiff, storage.storeMoney);
      console.log(result);
      break;

    }


  }




return;

};


console.log(calculateChange(1787, 2000));
//console.log(calculateChange(2623, 4000));
//console.log(calculateChange(501, 1000));


/*****************************ATTEMPT ONE ****************************/

// let difference = cash - total;
// let result = 1;
//
// let money = {
//   twentyBill:difference/2000,
//   tenBill:difference/1000,
//   fiveBill:difference/500,
//   toonie:difference/200,
//   loonie:difference/100,
//   quarter:difference/25,
//   dime:difference/10,
//   nickel:difference/5,
//   penny:difference/1
// };
//
// console.log(money);
//
//
// let change = {
//   twentyBill:0,
//   tenBill:0,
//   fiveBill:0,
//   toonie:0,
//   loonie:0,
//   quarter:0,
//   dime:0,
//   nickel:0,
//   penny:0
// };

// function checkChange(recalculate) {
//
//   if (recalculate > 499) {
//     if (money.twentyBill >= 1 ){
//       let howMany20Bill = Math.floor(recalculate/2000);
//       change.twentyBill = howMany20Bill;
//       recalculate -= howMany20Bill*2000;
//     } else if (money.tenBill >= 1  ){
//         let howMany10Bill = Math.floor(recalculate/1000);
//         change.tenBill = howMany10Bill;
//         recalculate -= howMany10Bill*1000;
//       } else if (money.fiveBill >= 1 ){
//           let howMany5Bill = Math.floor(recalculate/500);
//           change.fiveBill = howMany5Bill;
//           recalculate -= howMany5Bill*500;
//         }
//   }
//   console.log(recalculate);
//
//   if (recalculate < 500 && recalculate > 24){
//     if (money.toonie >= 1 ){
//       let howManyToonies = Math.floor(recalculate/200);
//       change.toonie = howManyToonies;
//       recalculate -= howManyToonies*200;
//     } else if (money.loonie >= 1  ){
//         let howManyLoonies = Math.floor(recalculate/100);
//         change.loonie = howManyLoonies;
//         recalculate-= howManyLoonies*100;
//       } else if (money.quarter >= 1 ){
//           let howManyQuarters = Math.floor(recalculate/25);
//           change.quarter = howManyQuarters;
//           recalculate -= howManyQuarters*25;
//         }
//   }
//
//   console.log(recalculate);
//
//   if (recalculate < 25){
//     if (money.dime >= 1 ){
//       let howManyDimes = Math.floor(recalculate/10);
//       change.dime = howManyDimes;
//       recalculate -= howManyDimes*10;
//     } else if (money.nickel >= 1  ){
//         let howManyNickels = Math.floor(recalculate/5);
//         change.nickel = howManyNickels;
//         recalculate -= howManyNickels*5;
//       } else if (money.penny >= 1 ){
//           let howManyPennies = Math.floor(recalculate/1);
//           change.penny = howManyPennies;
//           recalculate -= howManyPennies*1;
//         }
//   }
//     console.log(recalculate);
// return recalculate;
// }// end of checkChange
//
// let countLoops = 3;
// if (money.twentyBill > 1 || money.tenBill > 1 || money.fiveBill > 1) {
//   for (let check = difference; check > 0; countLoops--) {
//     result = checkChange(check);
//     check -= result;
//   }
// }
//
//
//
//
//
// return change;




/*****************************ATTEMPT TWO ****************************/

// let difference = cash - total;
// let errorMessage;
//
// let money = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
// let result = {};
//
// let change = {
//   twentyBill:difference/2000,
//   tenBill:difference/1000,
//   fiveBill:difference/500,
//   toonie:difference/200,
//   loonie:difference/100,
//   quarter:difference/25,
//   dime:difference/10,
//   nickel:difference/5,
//   penny:difference/1
// };
//
// let highestAmount = Object.values(change);
// let highestKey = Object.keys(change);
// let highestChange;
// let highestDenomIndex;
//
//
//
// for (var i = 0; i < highestAmount.length; i++){
//   if (highestAmount[i] < 1){
//     change[highestKey[i]] = 0;
//   }
//   if (highestAmount[i] >= 1){
//     highestChange = Math.floor(highestAmount[i]);
//     highestDenomIndex = i;
//     change[highestKey[i]] = highestChange;
//     result[highestKey[i]] = highestChange;
//     break;
//   }
// }
//
// let highestDenomination = money[highestDenomIndex]*highestChange;
//
// difference -= highestDenomination;
//
// let recalculate = difference;
//
// switch (recalculate) {
//
//   case (recalculate >= 1000 && recalculate < 2000):
//     let howMany10Bill = Math.floor(recalculate/1000);
//     result[tenBill] = howMany10Bill;
//     recalculate -= howMany10Bill*1000;
//     break;
//
//   case (recalculate >= 500 && recalculate < 1000):
//     let howMany5Bill = Math.floor(recalculate/500);
//     result[fiveBill] = howMany5Bill;
//     recalculate -= howMany5Bill*500;
//     break;
//
//   case (recalculate >= 200 && recalculate < 500):
//     let howManyToonies = Math.floor(recalculate/200);
//     result[toonie] = howManyToonies;
//     recalculate -= howManyToonies*200;
//     break;
//
//   case (recalculate >= 100 && recalculate < 200):
//     let howManyLoonies = Math.floor(recalculate/100);
//     result[loonie] = howManyLoonies;
//     recalculate-= howManyLoonies*100;
//     break;
//
//   case (recalculate >= 25 && recalculate < 100):
//     let howManyQuarters = Math.floor(recalculate/25);
//     result[quarter] = howManyQuarters;
//     recalculate -= howManyQuarters*25;
//     break;
//
//   case (recalculate >= 10 && recalculate < 25):
//     let howManyDimes = Math.floor(recalculate/10);
//     result[dime] = howManyDimes;
//     recalculate -= howManyDimes*10;
//     break;
//
//   case (recalculate >= 5 && recalculate < 10  ):
//     let howManyNickels = Math.floor(recalculate/5);
//     result[nickel] = howManyNickels;
//     recalculate -= howManyNickels*5;
//     break;
//
//   case (recalculate >= 1 && recalculate < 5):
//     let howManyPennies = Math.floor(recalculate/1);
//     result[penny] = howManyPennies;
//     recalculate -= howManyPennies*1;
//     break;
//
// }//end of Switch
//
//
//
//   console.log(difference);
//   console.log(recalculate);
//   console.log(result);
