// Dates

let myDate = new Date();
// console.log(myDate.toString()); // result-> Fri Sep 15 2023 10:04:23 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // result-> Fri Sep 15 2023
// console.log(myDate.toISOString()); // result-> 2023-09-15T10:05:35.383Z
// console.log(myDate.toJSON()); // result-> 2023-09-15T10:06:40.237Z
// console.log(myDate.toLocaleString()); // 9/15/2023, 10:53:28 AM ---> yesle Date & Time both dinxa.
// console.log(myDate.toLocaleDateString()); // result-> 9/15/2023
// console.log(myDate.toLocaleTimeString()); // result-> 10:10:24 AM

// console.log(typeof myDate); // Object


/////////////////////////////////////////////
// Specific Date or Date Customization
/////////////////////////////////////////////

// const myCreatedDate = new Date(2023, 0, 23); // result --> Mon Jan 23 2023
// const myCreatedDate = new Date(2023, 0, 23, 5, 3); // result --> 1/23/2023, 5:03:00 AM
// const myCreatedDate = new Date("2023-01-14"); // result --> 1/14/2023, 12:00:00 AM
const myCreatedDate = new Date("01-14-2023"); // result --> 1/14/2023, 12:00:00 AM
//console.log(myCreatedDate.toLocaleString());  // result --> With time also
//console.log(myCreatedDate.toDateString()); // result --> Sat Jan 14 2023


/////////////////////////////////////////////
// Time Stamp
/////////////////////////////////////////////

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now() / 1000);
// console.log(Math.floor(Date.now() / 1000));



/////////////////////////////////////////////
// New
/////////////////////////////////////////////

let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMilliseconds());


//console.log(`${newDate.getDay()} and time is ${newDate.getTime()}.`)


const formattedDate =  newDate.toLocaleDateString('default', {
    weekday: "long"
});

console.log(formattedDate);
