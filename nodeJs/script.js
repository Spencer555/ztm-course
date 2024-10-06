// in node window is called global but it has not fetch and document or browser specific object 


// process - means what u are running nowcons

const a = 4;
const b = 5;

console.log(a + b);


global.setTimeout(() => {
    console.log(a * b)

}, 3000);

// get your directory name
// console.log(__dirname)


// globalThis is same as the window object we get in the browser it also works outside the browser

// the globalThis now exist as part of the window and node



// importing using common js 
// const script2 = require('./script2.js')
// console.log('largeNumber', script2.largeNumber)

// using es6 import 
// to use this type of import set the "type":"module" in package.json or use the .mjs extension
import { largeNumber } from "./script2.js";
console.log('largeNumber', largeNumber)



// top level await 
// fetch("htps://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then(console.log('doe'))


// async function fetchStarShip() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json()
//     console.log(data)
// }

// now with top level await we can just use with no function
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json()
    // console.log(data)


// built in modules  - modules that come pre installed with node 
// remove the type:module in package.json b4 running
const c = require('fs'); //the file system 
const http = require('http') // build a server
console.log(c)


// to use fectch in node 
// global.fectch()