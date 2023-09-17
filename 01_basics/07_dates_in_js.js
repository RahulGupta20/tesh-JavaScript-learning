// Dates

let myDate = new Date();
console.log(myDate.toString()); // result-> Fri Sep 15 2023 10:04:23 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // result-> Fri Sep 15 2023
console.log(myDate.toISOString()); // result-> 2023-09-15T10:05:35.383Z
console.log(myDate.toJSON()); // result-> 2023-09-15T10:06:40.237Z
console.log(myDate.toLocaleString()); // 9/15/2023, 10:53:28 AM ---> yesle Date & Time both dinxa.
console.log(myDate.toLocaleDateString()); // result-> 9/15/2023
console.log(myDate.toLocaleTimeString()); // result-> 10:10:24 AM

console.log(typeof myDate); // Object


/////////////////////////////////////////////
// Specific Date or Date Customization
/////////////////////////////////////////////

const myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate)