// Number

const score = 100
//console.log(score);// not sure about data type

const balance = new Number(400); // we will surely say that the data type of balance is Number.
// console.log(balance);
// 
// console.log(balance.toString());
// console.log(typeof(balance));

//console.log(balance.toFixed(1));

const anotherNumber = 121.4899
//console.log(anotherNumber.toPrecision(3));

const rupees = 1000000
//console.log(rupees.toLocaleString('en-PK'));

//+++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++


//  console.log(Math.PI);//print PI value
//  console.log(Math.abs(-5));//absolute value it auto convert negative to positive, but do not change positive ino negative.
//  console.log(Math.round(2.3));
//  console.log(Math.round(2.9));
//  console.log(Math.floor(2.2));
//  console.log(Math.floor(2.9));
//  console.log(Math.ceil(2.3));
//  console.log(Math.ceil(2.9));
//console.log(Math.min(1,2,3,4,5,6));
// console.log(Math.max(1,2,3,4,5,6));

// console.log(Math.random());// always give us values in1
// console.log((Math.random()*100)+1);// always give us values in 10

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1))+min));//always gives us in-between 10 - 20

