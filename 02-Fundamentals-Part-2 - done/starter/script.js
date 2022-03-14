// implement strict mode!
"use strict";

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log("Dolphins won! (${avgDolphins} vs. ${avgKoalas})");
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log("Koalas won! (${avgKoalas} vs ${avgDolphins})");
//   } else {
//     console.log("No winners!");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// //We can use other parameters, like numbers

// checkWinner(900, 100);

// //TEST 2
// //change const to let in the above functions, so that we can recalc the values and reassign values

// scoreDolphins = calcAverage(84, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #2
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// const calcTip = function (bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// if arrow function
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill *0,15: bill * 0.2;

// // Challenge section 43
// const jonas = {
//   firstName: "Jonas",
//   friends: ["Steve", "Bob", "Jay"],
//   bestFriend: "Michael",
// };

// console.log(
//   "${jonas.firstName}, has ${jonas.friends.length}, and his best friend is ${jonas.bestFriend}"
// );

//Coding Challenge 3 - lesson 45

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   fullName: "${this.firstName} + $(this.lastName)",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// //error!
// console.log(mark.fullName);

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     "${mark.fullName}´s BMI (${mark.bmi}) is higher than ${john.fullName}´s BMI (${john.bmi})"
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     "${john.fullName}´s BMI (${john.bmi}) is higher than ${mark.fullName}´s BMI (${mark.bmi})"
//   );
// }

//coding challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.lenght; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

//poderia ter colocado a função em cada tip

console.log(bills, tips, totals);
