const name = "Ghafoor"
const age = 21

//console.log(name + age + " My Info" );// outdated code style

//string interpolation
//console.log(`Hello my name is ${name},age ${age}`);

const compName = new String("SoomroAbdulGhafoor")

// console.log(compName[2]);
// console.log(compName.__proto__);
// console.log(compName.length);
// console.log(compName.toLowerCase());
// console.log(compName.toUpperCase());
// console.log(compName.charAt(6));
// console.log(compName.indexOf("A"));

const newString = compName.substring(0,6)
//console.log(newString); 

const myString = compName.slice(-18,11)
//console.log(myString);

const myName = "           Ghafoor        "
console.log(myName);
//console.log(myName.trim());

const url = "https://ghafoor.com/soomro%20abdul"
console.log(url.replace('%20', '-'));
console.log(url.includes('abdul'));

let address = "kainat blesing qasimabad hyderabad"
console.log(address.split(' '));

