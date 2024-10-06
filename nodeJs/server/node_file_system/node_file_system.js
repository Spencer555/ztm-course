const fs = require('fs');

// this is async  
// it lets the code keep going while its reading the file when its done it lets the code know
fs.readFile('./node_file_system/hello.txt', (err, data) =>{
    if (err){
        console.log(err, 'errorororororororor')
    } console.log('async', data.toString('utf8'));
})

// read file synchronus - it lets the code wait for it till it finish reading b4 it can execute another code
const file = fs.readFileSync('./node_file_system/hello.txt')
console.log('sync', file.toString())


// if it does not exist it would create the file for us
// append
fs.appendFile('./node_file_system/hello.txt', ' this is more than cool!', err => {
    if(err){
        console.log(err)
    }
    
})

fs.writeFile('./node_file_system/bye.txt', ' this is more than cool!', err => {
    if(err){
        console.log(err)
    }
    
})


// delete
fs.unlink('./bye.txt', err => {
   err ? console.log(err) : console.log('file deleted successfully')
})

// start timer
// console.time('funchallenge')
// end time
// console.timeEnd('funchallenge')