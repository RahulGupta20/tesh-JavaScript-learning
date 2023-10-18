// const user = {
//     username: "hitesh",
//     price: 199,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`)
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "Rahul"; 
// user.welcomeMessage();

// function chai() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// ============ this is arrow function
// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()




const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)) 