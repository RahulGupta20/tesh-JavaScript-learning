// const tinder = new objeect(); //ye singleton object hai

const tinderUser = {}; // ye non single ton object h

tinderUser.id = "123abc" 
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


/*
// Nested Obeject
const regularUser = {
    email: "rahulgupta@gmail.com",
    fullname: {
        firstname: "Rahul",
        lastname: "Gupta"
    }
}
console.log(regularUser.fullname.firstname)
console.log(`My name is ${regularUser.fullname.firstname} ${regularUser.fullname.lastname}`)
*/

/*

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

console.log(regularUser.email)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } 
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

// user[1].email
console.log(user[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'))

 */



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.coursename);
console.log(course.courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);