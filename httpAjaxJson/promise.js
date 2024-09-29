const promise1 = new Promise((resolve, reject) =>{
   true ? resolve('stuff worked') : reject('Error it broke')
} )
const promise2 = new Promise((resolve, reject) =>{
   true ? resolve('stuff worked') : reject('Error it broke')
} )

const promise3 = new Promise((resolve, reject) =>{
   true ? resolve('stuff worked') : reject('Error it broke')
} )


// how to run it 
promise1
.then(result => result + '!')
.then(result2 => console.log(result2))
.catch(err => console.log(err)) // to catch errors


// to run mutilple promises 
Promise.all([promise1, promise2, promise3])
.then(values => {
    console.log(values)
})

// the results would be an an array of results in the order it was placed

// to run through multiple urls
// one fails all fails
// they are like event listeners but they can succeed or fails once only
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('err'))