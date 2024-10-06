const express = require('express');
const bodyParser = require('body-parser')
const app = express()


// middleware
// as the request is coming in it passes thru the middleware before hitting the destination function
// app.use((req, res, next) => {
//     console.log('<h1>Hello world</h1>')
//     next()//to let it continue to destination function
// })



app.use(bodyParser.urlencoded({extended:false})) //to accept url encoded data 

app.use(bodyParser.json()) //to accept json

app.get('/', (req, res) => {
    const user ={
        name:'sally',
        bongo:'natty'
    }
    // res.send("hellooo")
    res.send(user)
})


app.get('/profile', (req, res) => {
    const user ={
        name:'sally',
        bongo:'natty'
    }
    // res.send("hellooo")
    res.send(user)
})

app.post('/profile', (req, res) => {
    console.log(req.body)
    const user ={
        name:'sally',
        bongo:'natty'
    }
    // res.send("hellooo")
    res.send(user)
})





app.listen(3000)

