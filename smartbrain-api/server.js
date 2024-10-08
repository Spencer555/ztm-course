const express = require('express');

const app = express();

const bodyParser =  require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const database = {
    users : [
        {
            id:'123',
            name:'John',
            email:'john@gmail.com',
            password:'cookies',
            entries:0,
            joined: new Date(),
        },
        {
            id:'124',
            name:'Sally',
            email:'Sally@gmail.com',
            password:'bananas',
            entries:0,
            joined: new Date(),
        }
    ],login : [
        {
            id:'987',
            hash:'',
            email:'john@gmail.com'
        }
    ]
}


app.get('/', (req, res) => {
    res.json(database.users);
})

app.listen(3001, ()=>{
    console.log('app is running on port 3001');
});


// signin 
app.post('/signin', (req, res) => {

    console.log(req.body)

    
// // Load hash from your password DB.
// bcrypt.compare("cookies", "$2a$10$BKnO2GwRd.xL4SC6ZZ8AtO7K1Ztpxe7eDZ5OLjPIprHjweg6q5hM.", function(err, res) {
//     // res == true
//     console.log('first guess', res)
// });
// bcrypt.compare("veggies", "$2a$10$BKnO2GwRd.xL4SC6ZZ8AtO7K1Ztpxe7eDZ5OLjPIprHjweg6q5hM.", function(err, res) {
//     // res = false
//     console.log('second guess', res)
// });

    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json(database.users[0])
    } else {
        res.status(400).json("error logging in")
    }

})


// register 
app.post('/register', (req, res) => {
    const {email, name, password, id} = req.body
    // bcrypt.hash(password, null, null, function(err, hash) {
    //     // Store hash in your password DB.
    //     console.log(hash)
    // });
    const data = req.body
    database.users.push({
        id:id,
        name:name,
        email:email,
        password:data.password,
        entries:0,
        joined: new Date(),
    })
    res.json(database.users[database.users.length-1])
})




// profile
app.get('/profile/:id', (req, res) => {
    const {id} = req.params;
    let found = false;
    database.users.forEach((user) => {
        if (user.id === id){
            found = true;
            return res.json(user)
        } })

        if(!found){ 
            return res.status(404).json("No Such User")
        } 
})

// image - update user to increase entry count anytime they submit an image 
app.put('/image', (req, res) => {
    const id = req.body.id.toString();

    let found = false;
    database.users.forEach((user) => {
        if (user.id === id){
            found = true;
            user.entries++
            console.log(user.entries)

            return res.json(user.entries);
        } })

        if(!found){ 
            return res.status(404).json("No Such User")
        } 
}) 



// planing your api 
// /--> res  = GET this is working
// /signin --> = POST - success/fail
//  /register --> = POST - user 
//  /profile/:userId --> = GET - user
// /image --> PUT  --> updatedUserObject 