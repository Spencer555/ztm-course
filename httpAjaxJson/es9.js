// object speard opearator 

const animals = {
    tiger: 23,
    lion: 5, 
    monkey :3
}


const {tiger, ...rest}= animals 

// we grab tiger and the rest it set to animalls


// finally - this is related to promises it is called regardless if the promise resolves or rejects it is the last thing called in a promise
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
.finally( data => console.log('extra', data))




// for await of  - allows us to loop thru async await promises 


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
    // it same as above
    
// using for await of 
const getData2 = async function () {
    // creating an array of fetch promises of the requests
    const arrayOfPromises = urls.map((url) => fetch(url));

    // this is to loop over the promises
    for await (let request of arrayOfPromises){
        const data = await request.json()
        console.log(data)
    }
}