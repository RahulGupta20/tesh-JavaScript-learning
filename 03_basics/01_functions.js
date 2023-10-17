// function addTwoNumber(number1, number2) {
//    console.log(number1 + number2);
// }
// addTwoNumber(3, 5);

function addTwoNumber(number1, number2) {
   let result = number1 + number2;
   return result
}
const ram = addTwoNumber(3, 5);

// console.log("Result: ", ram)


function loginUserMessage(userName) {
   return `${userName} just logged in`
}
// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());


// && if username xaina vne
function loginUserMessage(userName) {
   if(userName === undefined) {
      console.log("Please enter a username")
      return
   }
   return `${userName} just logged in`
}
// console.log(loginUserMessage("hitesh"));


// arko tarika parameter ma default value diyera pni garna sakinxa
function loginUserMessage(userName = "Sam") {
   // if(!userName) {
   //    console.log("Please enter a username")
   //    return
   // }
   return `${userName} just logged in`
}
// console.log(loginUserMessage());


function calculateCartPrice(...num1) {
   return num1
}

// console.log(calculateCartPrice(200, 400, 500))


//=========================================================
// Object ko function me kaise pass kiya jata hai aur kaise use kiya jata hai
//=========================================================

const user = {
   username: "Hitesh",
   price: 199
}

function handleObject(anyobject) {
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
   username: "Sam",
   price: 399
})


//=========================================================
// Array ko function me kaise pass kiya jata hai aur kaise use kiya jata hai
//=========================================================

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
   return getArray[1]
}
console.log(returnSecondValue(myNewArray))


