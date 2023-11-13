// Primitive
// call by value (primitive)
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt 
let name ="Ghafoor"
const score = 100
const scoreValue = 100.3
const isLoged = false
const temp = null
let userEmail;
 
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId); // although values are same but return value is change.

const bigNumber = 242442487866687689728n // bigInt





// NoN Primitive (Reference Type )

//Array, Object, Function

const heros = ["Supperman", "Pokemon", "Ben10"];

let myObj = {
    name : "Ghafoor",
    age : 21
}

const myFunction = function(){
    console.log("Hello World");
}


// console.log(typeof temp);
// console.log(typeof myFunction);
// console.log(typeof myObj);
// console.log(typeof heros);

// all non primitive types data type is function, while function is oject function.
// assignment read all the data type in documentation.

//+++++++++++++++++++++++++++MEMORY+++++++++++++++++++++++++++++++++++

// Stack(Primitive) Heap (Non-Primitive)

let myName = "Ghafoor"
let anOtherName = myName;

anOtherName = "Soomro Ghafoor" 

//console.log(anOtherName);
//console.log(myName);


let userOne = {
    email: "user@google.com",
    pwd: "admin123"
}

let userTwo = userOne
userTwo.email="ghafoor@google.com" // you can acces object value  by . 

console.log(userOne.email); // for print Oject particular thing
console.log(userTwo.email);
