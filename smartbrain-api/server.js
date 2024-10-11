const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const knex = require('knex');
const register = require('./controllers/register')
const login = require('./controllers/login')
const profile = require('./controllers/profile')
const image = require('./controllers/image')
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: '2020',
        database: 'smart-brain'
    }
});

app.listen(3001, () => console.log('app is running on port 3001'));


// home page
app.get('/', (req, res) => db.select('*').from('users').then(response => res.json(response)))

// signin 
app.post('/signin', (req, res) => {login.handleLogin(req, res, db, bcrypt)})

// register 
// this is what we call dependency injection
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})

// profile
app.get('/profile/:id', (req, res) => profile.handleProfile(req, res, db))

// image - update user to increase entry count anytime they submit an image 
app.put('/image', (req, res) => image.handleImage(req, res, db))



// planing your api
// /--> res  = GET this is working
// /signin --> = POST - success/fail
//  /register --> = POST - user
//  /profile/:userId --> = GET - user
// /image --> PUT  --> updatedUserObject 


SECURITY REVIEW 10MIN