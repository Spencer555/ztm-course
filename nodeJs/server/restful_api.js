const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// send static files the directory plus public folder
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
   
  res.status(200).send()
})

app.get('/:id', (req, res) => {
    console.log(req.query) //what we get when we do a get query
    // req.body what the request sets in the body
    console.log(req.headers)// req.headers data in headers
    console.log(req.params)// req.params access params of url
    res.status(200).send('getting root')

})

app.listen(3000)