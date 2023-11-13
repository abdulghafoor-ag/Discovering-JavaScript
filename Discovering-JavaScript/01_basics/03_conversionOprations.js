//NaN
let score = 33
//console.log(typeof(score));

let age = "20aa"
//console.log(typeof age);

let valueInNumber = Number(age);
//console.log(typeof (valueInNumber));
//console.log(valueInNumber);

//Null

let no = null
//console.log(no);

let value = Number(no);
//console.log(typeof (value));
//console.log(value);

//Undefined

let abc = undefined
let valueOfabc = Number(abc)
//console.log(typeof valueOfabc)
//console.log(valueOfabc);


// "123" => 123
// "123abc" => NaN (not a a number)
// true => 1 and false => 0
//null = 0


let logedIn = "ghafoor"
let booleanlogedIn = Boolean(logedIn)
//console.log(booleanlogedIn);

// 0 => false
// 1=> true
// "" => false
// "Ghafoor" => true

let someNumber = 133466
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//****************Operations ***********

let myValue = 10
let negValue = -myValue
// console.log(negValue) 
// 
// console.log(2+2);
// console.log(10-2);
// console.log(2*2);
// console.log(10/2);
// console.log(2**2);
// console.log(2%3);

let str1 = "Hello "
let str2 = "World"
let str3 = str1 + str2
//console.log(str3); 

//console.log(1+"2"); // 12 output it does not add them 
// console.log(1+1+"1"); // first it perform opraton and the then output 21
// console.log(true); // true
// console.log(+true); // 1
// console.log(true+1); // 2
//console.log(true+); // error

let num1, num2, num3
num1 = num2 = num3 = 2+2 // complex code try to write simple code to enhance code readability.

let gameCounter = 10
//gameCounter++ //1 number increment (postfix) 
//++gameCounter // 1 number increment (prefix)
--gameCounter // 1 decrement
gameCounter-- // 1 decrement
//console.log(gameCounter);

//********************** Assignment *******************
// study about prefix and postfix (mdn documentation)
// study about conversion (ecma script)