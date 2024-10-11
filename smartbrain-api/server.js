const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const knex = require('knex');

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



app.get('/', (req, res) => {
    db.select('*').from('users').then(response => res.json(response));
})

app.listen(3001, () => {
    console.log('app is running on port 3001');
});


// signin 
app.post('/signin', (req, res) => {
    // we get the email and hash
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash); // true

            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', req.body.email)
                    .then(user => {
                        res.json(user[0])
                    }).catch(err => res.status(400).json('unable to get user'))

            } else {
                res.status(400).json('wrong credentials')

            }
        })
        .catch(err => res.status(400).json('wrong credentials'))
})


// register 
app.post('/register', (req, res) => {
    const { email, name, password, id } = req.body

    // since we are running two operations at the same time we need to add transaction so if one fails all fail

    var hash = bcrypt.hashSync(password);
    // transactions are created when we have to do more than 2 things at once

    // and u use trx instead of db to do transactions
    db.transaction(trx => {
        trx.insert({
            hash: hash, email: email
        })
            .into('login')
            .returning('email')
            // we insert to long and it returns the email and we pass it to insert into users
            .then(loginEmail => {
                // insert and return all the inserted col
                // we now inserts it in the users
                trx('users').returning('*').insert({
                    email: loginEmail[0].email,
                    name: name,
                    joined: new Date()
                }).then(user => {
                    res.json(user[0]);

                }).then(trx.commit)
                    // if all pass commit
                    .catch(trx.rollback)
                // if one fail rollback
            }).catch(err => console.log('unable to register'))
    })


})




// profile
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id }).then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('Not Found')
        }
    }).catch(err => console.log('error getting user'))

})

// image - update user to increase entry count anytime they submit an image 
app.put('/image', (req, res) => {
    const id = req.body.id.toString();
    db('users').where('id', '=', id)
        .increment('entries', 1).returning('entries')
        .then(entries => {
            res.json(entries[0].entries)
        }).catch(err => res.status(400).json('unable to register'))

})



// planing your api
// /--> res  = GET this is working
// /signin --> = POST - success/fail
//  /register --> = POST - user
//  /profile/:userId --> = GET - user
// /image --> PUT  --> updatedUserObject 