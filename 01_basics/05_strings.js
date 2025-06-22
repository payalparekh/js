const name="payal"
const repoCount= 3

//console.log(name+repoCount+" Value"); // bad syntax

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('hitesh-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newstring= gameName.substring(0,4)
// console.log(newstring);

// const anotherstring= gameName.slice(-8,4)
// console.log(anotherstring);

// const newstringOne="   hitesh    "
// console.log(newstringOne);
// console.log(newstringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('chai'));

console.log(gameName.split('-'));