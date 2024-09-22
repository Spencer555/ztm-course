// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// ans const {firstName, lastName, age, eyeColor } = person 

// Object properties
let a = 'test';
let b = true;
let c = 789;

// ans
const {a,b,c} = obj

const okObj = {
  a: a,
  b: b,
  c: c
};

// becomes
const okObj1 = {
  a,
  b,
  c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

const isValidAge = (age=10) => age;




// Symbol
// Create a symbol: "This is my first Symbol"

const mySymbol = Symbol('too much money')

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => { 
    return username && location ? "I am not lost":"I am totally lost "}