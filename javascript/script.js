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



// scope
// it means variables access what variables u have access to when the code is running 
// by default u are in the root scope which is the window object in javascript


// pro is a local scope because it can only be accessed inside the function 
// but the function has access to root scope
function bb() {
    var pro = 'speed'
}


// tenary operator 

condition ? expr1 : expr2

2 === "2" ? 'true' : 'false'

// switch statement used for when u have a lot of conditions

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = 'you become a monster';
            break;
        case "back":
            whatHappens = 'you become a god';
            break;
        case "right":
            whatHappens = 'you become a devil';
            break;
        case "left":
            whatHappens = 'you become all you can be';
            break;
        default:
            whatHappens = 'enter a valid direction'

    }

    return whatHappens
}



// ecmascript 
// ECMAScript === Javascript 
// es5 & es6

// babel allows us to write js with new features and transforms it in to one that works on all browsers 

// let and const 
// both are new ways of declaring variables 
// const is for constant which cant be changed 
//let is for local scope not global scope with let anytime its wrapped with curlly bracket it forms a new scope which becomes a local scope
// but with var we were able to create a scope only inside a function 
// but with let we create in any curly bracket
// dont use var anymore use let
// const use for anything thats not going to change 

const player = "bobby";
let experience =100;
let wizardLevel = false; 

if (experience > 90){
    let wizardLevel = true;
    console.log('internal', wizardLevel);
}

console.log('external', wizardLevel);


// u can change the properties of const but u cant rassign it 
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false 
};

// u cant reassign with const
obj = 6;

// but u can update 
obj.wizardLevel = true ;

//destructring 
const player2 = obj.player
const experience2 = obj.experience
const wizardLevel2 = obj.wizardLevel

// instead of this u can do this 

const {player1, experience1} = obj;
let {wizardLevel1} = obj;


// u can assign dynamic values to objects
const myObj = {
    [name]: 'hello',
    [1+2] : 3
};

const a = "simon";
const b = true; 
const c = {};

// if property and value are the same we just list only one 

const obj = {
    a,b,c
};

// instead of 
const obj = {
    a:a, 
    b:b, 
    c:c
};

// template string 
`this is ${obj.a}`

// default arguments for functions 
function greet(name="spencer"){
    return console.log(`hello ${name}`);
};


// Sybmol used to create a unique type so there is no conflict
// sym2 is not equal to sym3
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");


// arrow function 

function add (a , b){
    return a + b
}

// becomes 

(a,b)=>a+b;


// advanced functions 
// the greet variable gets created everytime its a clean slate and nothing else conflict with it using scope this is a closure a function with a function and can be only accessed by the parent function 
// with closure the child scope always have access to the parent scope


//closures - a function run. the function executed. it not going to execute again. but it's going to remember that there are references to those variables. so the chlid scope always have access to parent scope but parent scope do not have access to children 

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet)
    }
    return second
}

const newFunc = first()
newFunc()



// currying  - converting a function that takes multiple arguments into a function that takes them one at a time

// e.g so we are changing it to accept one parameter at a time 
const multiply = (a, b) => a * b;
// to run this 
multiply(3, 4)

const curriedMultiplied = (a) => (b) => a*b;
// to run this - we are passing the parameters one at a time
// so we call the function once we run it with a it returns another function that accepts b the run to return results
curriedMultiplied(3)(4);

// so y is this usefull lets say i want a function to multiply a num by 5 
const multiplyBy5 = curriedMultiplied(5)



// compose - the act of putting two functions together to form a third function where the output of one function is the input of another
// both f and g are functions
const compose = (f,g) => (a) => f(g(a));

// e.g we have a sum function that takes a number adds 1

const sum = (num) => num + 1

compose(sum, sum)(5)
// to understand a is 5 so on the first run f(g(5))
// the the two function parameter the which is sum, g function runs  which adds one so 5 becomes 6
// f(6)
// and the f is also the same sum function which adds one again so it become 7

// avoid side effects and functional purity and always return a value
// this create determinsitc - means no matter the input the return value is the same
// side effects are actions that happen inside of a function that we dont know anything about e.g console.log, reacts, or write to external file

// anything the function do to affect the outside world because functions should be thought as thier own universe by avoiding it we attain functional purity

// e.g 
var ad = 2
function b(){
    ab = 43 //this is  a side effect
}

// arrays 
// map, filter, reduce
const array = [1,2,3,4,5];

const double = []

// for each loops over something and does whatever the function saids
// with map we loop over each  num and return a new array
// foreach just applys to each element and does not return so use map
// it does not create a new array
const newArray = array.forEach((num) => {
    double.push(num*2)
})


// with map u must always return something
// its creates a new array
// and there are not side effects and this becomes a pure function
// and not changing the original array
const mapArray= array.map((num) => {
    return num *2
})

// since we are returning only a single line
const mapArray2 = array.map(num => num * 2)



// filter we filter an array with a condition -all elem greater than 3
// this also returns a new list 
// if it returns true it goes into array if it returns false it does not go into array 
// u must also return 
const filterArray = array.filter(num => num > 3)


// reduce- it a very powerfull method and can be used to do both  filtering and mapping
// accumulator it remembers what was there previously 
// u must also return 
// u can specify what u want acuumulator to start with which is 0
const array1 = [1,2,3,4,5];

// so this becomes starting from 0 
0+1+2+3+4+5
const reduceArray = array1.reduce((accumulator, num) => accumulator + num, 0)


// advanced objects
// reference type , context and instantiation


// reference type
const obj1 = {value:10};
const obj2 = obj1;
const obj3 = {value:10}

obj1 === obj2 //true 

obj1 === obj3 //false

// obj one is linked to obj2 so if obj1 is changed obj2 is updated automatically so obj2 is a reference of obj1

// but no two objects are the same so they can have the same value but the are still not the same

// the other types we learnt are primitive types numbers, null, string , undefined , boolean symbol meaning they are all defined by the programming language 

// a reference type which is a non primitive type are not defined by the programming language this means they are created by the programmer

1===1 //javascript knows its a number datatype so it would be always true 

// but 
// obj1 was created by the programmer so if not referenced no two can be the same even if the have the same values


// context is different from scope 
// scope is created when it see's curly brackets or function 
// context tells you where u are within the obj
// this = this means the  window object by default
// this = means the object environment we are in right now the left 
// of the dot
// this in this case would be obj1
obj1.person 

// in this case the this is the window object but when that same function is in an object the this is an object
function a(){
    console.log(this)
}


// instantiaion 
// making multiple copies of an objects 
// if u ever want to make a copy of an object it a good idea to do this
class Player {
    // everytime u make a copy of the player class the first thing that get run is the construtor function
    constructor(name, type){
        console.log('player', this)
        this.name = name; 
        this.type = type;
    }
    
    // a method 
    // so any player you create would be able to introduct it self 
    introduce(){
        console.log(`Hi I am ${this.name} and of type ${this.type}`)
    }
}

// add on top what ever a player has 
class Wizard extends Player {

    constructor(name, type, age){//properties from wizard class
        super(name, type)//the constructor function of the player and the properties u want to pass from the player class
        console.log('wizard', this)

    }

    play (){
        console.log(`Weeeee i'am a ${this.type}`)
    }
}

// the moment u do the new keyword u have done instantiation
const wizard1 = new Wizard("Shelly", "Healer", 642)
const wizard2 = new Wizard("Shawn", "Dark Magic", 322)


// pass by reference vs pass by value 
// primitive types are immutable in order to change them we need to completely remove the primitive type
// lets say var a = 5 in order to change it i must completely remove it from memory and create a new var a = 10 u cant modify it
// and they dont know of each other existance that what we call pass by value 

// a have the address of where the primitive value 5 sits in memory and same with b it has the address of 10
var a = 4 
var b = 10 

// so if u do u are copying the value an putting it in a new memory space so if one is updated it does not affect the other this is is pass by value 
var b = a


// but
// objects know of each other existance thats why we call them pass by reference
let obj1 = {name:'rda', pass:'1253'};
let obj2 = obj1 

// so if u edit obj2 it affects object one if u edit object 1 it affect obj2 
// because obj are stored in memory and pass by reference so when we assign obj we just show reference to the address of the object not the value so if u change the pass it affects both since they are both referencing it 

// this is saving space in memory
obj2.pass = 'redme'

// the same also applys to arrays since they are also obj

// so to copy an obj and not referenced so as to not affect the main one 
// for arrays 
var c = [1,2,3,4,5];

var d = [].concat(c);

// to copy an object 
let obj = {a:'a', b:'b',c:'c'};


// let objClone = Object.assign(object to copy to , sourceobj)
let objClone = Object.assign({}, obj)

// or 
let objClone1 = {...obj}

// this is a shallow clone so it wont work on objects containing objects if the sub objects are updated
// but if u have an object containing an object we use a superclone 

let superclone = JSON.parse(JSON.stringify(obj))

// so stingify turns everything in to a string and parse turns it back into an object but be carefull because deepclone has performance issue if the object is massive


// type cohersion - means if the operands(things to the left and right of the operator) are different type one would be converted in to an equivalent value by the javascript engine 
// type cohesion happens when u use double equal == it tells js to compare the 2 types and coherce one to the other  if not the same 

1 == '1' // is true 
// but
 1 === '1' //is not true because it checks for type

//  it also same for if statements converting numbers to true or false 0 and 1 


// in js the is a concept of  -0 and +0 
-0 === +0 // gives u true even though they are different 
NaN === NaN // gives u false even though true 

Object.is(-0,+0) // gives u false if u check the two parameters
// Object.is works the same as === for the -0 +0 and for NaN


// es 7 2016 

// includes method for string and arrays 

var hello = 'hii helloo'

hello.includes('hi') //true

var array =  [2,3,4,5,6,7]

array.includes(3) //true 


// exponential operator
// to get the exponent of a number
const square = (x) => x**2
const cube = (x) => x**3


// es8 2017 
"spencer".padStart(10)
"        spencer" //10 spaces before spencer

// .trim to remove whitespaces

'spencer'.padEnd(5)
'spencer     '//5 spaces after spencer

// tralling commas, functions parameter lists and calls used for when u have long parameter list 
const fun = (a,b,c,d,) => {
    console.log(a)
}
fun(1,2,3,4) // returns a which is 1

const obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

// object.values
// object.entries

// object.keys 
// was previously used to convert obj to array to be abble to access values 
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})

// but now u can loop thru the values only 
Object.values(obj).forEach(value => {console.log(value)})

// but now u can loop thru the entries u get an array of property and value or key and balue 
Object.entries(obj).forEach(value => {console.log(value)})



// generate a username for object with the username numbers and names 

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})

// so now we get displayed
'Santa0',
    'Rudolf1',
    'Mr.Grinch2'



// es10 2019 
flat() // a method to be used on array it returns a new array that makes nested arrays flat only one array on only one level 


const array = [1,2,3,4,5 , [7,8,6]]
array.flat() //[1,2,3,4,5,7,8,6]

const array = [1,2,3,4,5 , [7,8,6, [4,3]]]
array.flat(3) //flaten the array by 3 layer



const entries = ['bob', 'sally',,,,,,,,'cindy']
// using  flat we can flat out the entries and clean out our data 
entries.flat() // ['bob', 'sally', 'cindy']


// flatMap()
// this means for each item we would flaten we want to add a '#' to it
// so flatmap means we are flattening the array and map to it 
const chaos = array.flatMap(creature => creature + '#')


let email = '                spl@gmail.com'
let email1 = 'spl@gmail.com               '   

// trim start 
email.trimStart() //remove spaces from start 
email.trimEnd()// remove spaces from end
email.trim() //remove from both sides


// fromEntries - receives an array and converts it to an object
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
// convert the arrays to objects 
Object.fromEntries(userProfiles)

// becomes 
// {'commanderTom':23, 'derekZlander': 40, 'hansel': 18}


// try catch
try{
   4+5
} catch(error) {
    // catch the error
    console.log('error is caught: ', error)
}


// advanced loops
const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
    appels:5, 
    oranges:10, 
    grapes:1000
}

basket.forEach(item => {
    console.log(item)
})

// for of loop this gets the values
// iterating over array and strings
// iterable is for only arrays and strings and for of loop does not work with object
for (i of basket){
    console.log(i)
}

// for in loop -allows u to see the object properties
// deals with objecs
// with an objects it is not iterating but enumerating because properties of an objects is what we call enumerable
for (i in basket){
    console.log(i)
}


// es2020
// BigInt 
// Nullish Coalescing Operator ?? 
// Optional Chaining Operator ? 
// Promise allSettled 
// globalThis


// typeof BigInt - gives u type of the item u passed
// to get a bigint add n to the number 12n, 1n

// in js we have a certain integer when u get to u break down and gives wrong answers
// called MAX_SAFE_INTEGER 
// 9007199254740992 or 9 quadrillion 
// BigInt solves this problem  allows us to use numbers larger than this
// e.g. 9007199254740992n + 1n 


// optional chaining 

let will_pokemon = {rap:'birdman', gender:'man', race:'black', power:''}

// it does not throw an error if the property does not yet exist or loaded it would return undefined rather
will_pokemon?.rap  


// nullish coalesing ?? usefull for occasions that use or
will_pokemon?.rap ?? ;


// es 2021 
const str = "ztm is the best of the best"

// replace all the best in the string with great
str.replaceAll("best", 'great')


// es 2022
// .at( )
const  arr = [100, 200, 300, 400, 50000, 10]
// get the second to last item from the array 
arr[arr.length - 2]

// now  to get the second to last item u just give it the index
arr.at(-2)



// es2023
const ztmMonsters = [
    {id:1, monster:'Mr, Mouse', level:1},
    {id:2, monster:'Mac', level:30},
    {id:3, monster:'Denodude', level:17},
    {id:4, monster:'Pye', level:5},
]

// find the monsters level 15 or higher and pick the last one on the list
// old way 
const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
console.log(advancedMonsters.length -1)

// new way 
findLast()
let lastMonster = ztmMonsters.findLast(item => item.level > 15)

// findlast index 
let lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15)

// toReversed()
// create a copy and reverse the copy and does not modify the original list any method that start with to does the same it does not affect the original list

// toSorted sorts array but does not affet the original list


// toSpliced
// starting from the second index(2) remove one item(1)
// array.toSpliced(2,1)

//  toString convert to string but does not affect original

// with - at the index of one replace it with ghost it does not modify the original list

// ztmMonsters.with(1, 'Ghost')


// es 2024
const pokemons = [
    { name: "bulbasaur", type: "grass"},
    { name: "blastoise", type: "water"},
    { name: "charmander",  type: "fire"},
    { name: "ivysaur", type: "grass"},
    { name: "charmeleon",  type: "fire"},
    { name: "charizard",  type: "fire"},
    { name: "squirtle", type: "water"},
    { name: "venusaur", type: "grass"},
    { name: "wartortle", type: "water"},
    { name: "pikachu", type: "electric"}
  ]
  
  
// groupBy() - a quick way to organize collections based on a string values it can be used on objects not arrays 
// it takes items and selector as a parameter 
// it takes the collection and the callback method
// this return the collections based on types
Object.groupBy(pokemons, (i) => {
    return i.type; 
})

// modules 
// browserfy used common js 
// but what it is, is a module bundler it runs b4 u put the website online it reads thru all js files and syntax and bundles everything into a single file the it creates a file called bundle.js when developers are working on it we have our own seprate files but when we are putting it out we run it thru browserfy b4 putting it out in public

// first javascript file 
module.exports = function add(a, b){
    return a+b
}

// file we are importing to 
var add = requre('./add')



// now with es and webpack 
// js1 
export const add =(a,b) => a+b 

// or 

export default function add(){
    return a+b
}

//js2
import {add} from './add'
or 
import add from './add' 


// webpack is also a module bundler like browerfiy which allows us to use es6 in all browsers


// debugging - why ur code is having errors or not acting the way its supposed to
// e.g.

const flattened = [[0,1], [2,3], [4,5]].reduce(
    (a,b) => a.concat(b), [])

// how i would debug this we change the name for it to make sense to us

const flattened1 = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        return accumulator.concat(array)
    }, [])

// u can look at the paths thru based on the console.log() to debug the issue 

// u can also use debugger - just like set_trace python
// add allows u to step thru the function step by step
const flattened2 = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array)
    }, [])



// how javascript works