const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber =  123.7947;
// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000;
/*
console.log(hundreds.toLocaleString()); // result 1,000,000
console.log(hundreds.toLocaleString('en-IN ')); // result 10,00,000
  */


/*=========================================================*/
// Maths
/*=========================================================*/

/* 
console.log(Math);
console.log(Math.abs(-4)); // result 4
console.log(Math.round(4.6)); // result 5
console.log(Math.ceil(4.2)); // result 5
console.log(Math.floor(4.9)); // result 4

console.log(Math.PI);
console.log(Math.SQRT2);
*/

console.log((Math.random() * 20) + 1);
// console.log(Math.trunc((Math.random() * 20) + 1));

const min = 10;
const max = 20;

// console.log(Math.random() * (max - min + 1))
// console.log(Math.random() * (max - min + 1) + min);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);