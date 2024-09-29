// ASYNC AWAIT 
// underneath the hood the async function is a function that return a promise
// this makes code easier to read

movePlayer(100, 'left')
.then(() => movePlayer(400, 'left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'left'))


// with async await 
// this is just promises underneath the hood 
// it is called syntatic sugar something that still does the same thing but just different syntax to make it look prettier

// await - means pause this function untill i have a response for you and can be used for any function that returns a promise

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left') //pause
    const secondMove = await movePlayer(10, 'Right') //pause
    await movePlayer(330, 'left') //pause
    await movePlayer(30, 'left') //pause
    
}


// using it with fetch 
fetch('https://jsonplaceholder.typicode.com/users')
.then(res = res.json())
.then(console.log(log()))

//using async await 


async function fetchUser (){
    const response = await fetch('https://jsonplacehloder.typicode.com/users')


    const data = await response.json()
    console.log(data)
}


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]
// to run through url


const getData = async function () {
// catch error and run thourgh urls
    try {
        const [users, posts, albums ] = await Promise.all(urls.map(url =>  fetch(url).then(response => response.json())
    ))

    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)

    } catch (e){
        console.log(e)
    }
}


