// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// if(true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);
/*

let a = 300;
if(true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a)
}

// console.log(a);
*/

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username)
    }
    // console.log(website);

    two()
}
one();