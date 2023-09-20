// objects



//object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chaodhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); // arko tarika
// console.log(jsUser["full name"]); // arko tarika
// console.log(typeof jsUser[mySym]);

//override object value
jsUser.email = "rahul@gmail.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.email = "sonu@gmail.com"
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello JS user")
}

// console.log(jsUser.greeting())

jsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`)
}
console.log(jsUser.greetingTwo())