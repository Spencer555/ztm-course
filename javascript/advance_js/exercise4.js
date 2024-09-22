//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

// this becomes 
x = 10 
addTo(10)
x => y => 10 + y 

addToTen(3)
// this becomes the second param to the function 
x => y => 10 + 3
// so 13



//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

curried(30)(1)
// becomes passed one param at a time 
(a) => (b) => 30 + b
(a) => (b) => 30 + 1
// so 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

(a) => (b) => a+b 
// add5 passed the first value to curriedSum which becomes param (a)
a => b => 5+b 
// then the add5(12) is passing 12 to the curriedSum sum indirectly this is the same as 
// curriedSum(5)(12)
// add5(12) 
//which becomes 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// the function is a parameter so the parameter 10 is a

// f(g(a)) is equal to f(g(10))

// add5 is the second parameter with input 10 which returns 15
// f(g(10)) becomes f(15)
// the first parameter is add1 with value of 15 now 
// so it becomes results is 16

//What are the two elements of a pure function?
// no side effects
// deterministic - always product the same results given the same input