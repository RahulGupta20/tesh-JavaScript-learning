// objects



//object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chaodhary",
    mySym: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); // arko tarika
console.log(jsUser["full name"]); // arko tarika
console.log(typeof jsUser.mySym);