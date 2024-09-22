const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes

const biggestNumberInArray = (arr) => {

} 
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    var max = arr[0]
     for (i of arr){
       if (i > max){
        max = i
       }
         
     }
    return max
}
function biggestNumberInArray2(arr) {
    var max = arr[0]
     arr.forEach((value => {
        if (value > max){
            max = value
        }
     }
         ))
         
     
    return max



}

function biggestNumberInArray3(arr) {

  var max = arr[0]
  for (i=0; i< arr.length; i++){
    if (value > max){
      max = value
  }
  }
     
      
  
 return max

    }


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

  for (i in basket){
    if (i === lookingFor){
      return lookingFor
    }
  } 
  return 'not found'
}