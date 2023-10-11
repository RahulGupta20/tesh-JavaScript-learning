// arrays

const myArr = [0, 1, 2, 3, 4, 5];


//push - pop
/* 
myArr.push(6); // add an array element at the last of arrray
myArr.push(7); // add an array element at the last of arrray
myArr.pop();  // remove an array element at the last of arrray
console.log(myArr);
*/

// unshift - shift
/* 
myArr.unshift(9) //add an array element at the begining of array
myArr.shift() //remove an array element at the begining of array
console.log(myArr);
*/

// includes
// console.log(myArr.includes(9)); // includes check if array includes 9

// indexof
//console.log(myArr.indexOf(3)) // check 3 is the which position of the array
// console.log(my)

// console.log(myArr);

//const newArry = myArr.join()
//console.log(typeof newArry); // string type ma covert gari dinxa
console.log("A", myArr)

//slice - splice
// const myn1 = myArr.slice(1, 3);
// console.log(myn1)
// console.log("A", myArr)
// Note: slice me original value jyu k tyu raheta hai aur copy bana leta hai usme results dikhaata hai

// const myn2 = myArr.splice(1, 3)
// console.log("B", myArr);
// console.log(myn2);
// console.log(myArr)
// Note: splice me original value me se hi cut-out kar leta hai esme original ko chedchhad krrta h


const myfamily = ["Papaji", "Mummy", "Didi", "Rahul", "Barkha", "Sonu"];
console.log(myfamily);

const couple1 = myfamily.slice(0, 2);
console.log(couple1);
const couple2 = myfamily.slice(3, 5);
console.log(couple2);
console.log(myfamily)

const bachelor = myfamily.splice(5);
console.log(bachelor)

console.log(myfamily)