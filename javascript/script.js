// types in js 
// Number e.g 3 
// String e.g 'spencer'
// Boolean e.g true or false
//  3 === 3 true its a strict type checking when comparing 2 things
// Undefined it means the var has not been assigned
Null
Symbol
Object



// variables it must start with a letter, $ or _ it used to store values
var name = "spencer is the best in the game";


var first = prompt('enter first number');

var first = prompt('enter first number');
var second = prompt('enter second number');

var sum = Number(first) + Number(second);
// alert to screen
alert('hate to lose')


// a fragment of code that produces a value is an expression


// || or 
// && and
// ! not 

// if i put js at the top the site waits for javascript 
// if i put js at the down the site does not wait for javascript 


// functions 
// arguments are whats given to a function
// functions need to be called and can be called as many times as u want

// first way to create a fucntion
function sayHello() {
    console.log("Hellooooo")
}


// the second way
var sayBye = function() {
    console.log("Bye")
}

sayBye()


// with parameter

var sayBye = function(name) {
    return console.log("Bye" + name)
}

sayBye("esther")
    // return is the final way to end a function


function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "Thats too Hard";
    }
    return a * b;
}



// parameters vs arguments
// functions get called with arguments 
// parameters its the placeholder in the main function




// data structures 
// arrays
var list = ['tiger', 'cat', 'bear', 'bird'];

// it accessed with indexing
// so to get tiger 
// list[0]


list.shift();
// remove the 0 index item 

list.pop();
// remove the last item 

list.push('spider');
//  add spider to end of list 

list.concat(['chicken', 'dog']);
// add a new list to the old one


list.sort();
//sort the original list the ones concated wont be part unless is set to a new variable 

// some methods modify the current one some create new lists



// objects 
// a funtion inside an object is the method inside the object
var user = {
    name: "john",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    cars: ['bmw', 'audi', 'bentley'],
    shout: function() {
        console('Won Shouti')
    }
}

// to access we use 

// user.name or user['name']

// u can create an empty object this is null 

// but u can set a property to this
var emptyObj = {};

// u cant set a property to this
var nullObj = null;


// function declaration
function newFunction() {}


// function expression  it ends with a semi colon
var newFunction = function sexyMana() {

};


// expression  is something that denotes a value 
// it end with a semi colon 
// if we are returning something from a function it an expression 


// loops

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
]


// foreach
todos.forEach(function(todo) {
        console.log(todo)
    })
    // for loop

for (var i = 0; i < todos.length; i++) {
    console.log(i);
}

// while loop
var counterOne = 0;

while (counterOne < 10) {
    counterOne++
    console.log('red is ' + counterOne)
}

var counterTwo = 100;
do {

    console.log(counterTwo)
    counterTwo--
} while (counterTwo > 0)

// dom 
// the document object model 
// window is the parent of everything in the browser and anytime u use a function and dont specify anything it assumes u are talking about the window object

// to listen to an event and supply a funtion to run when the event happens is called a callback function