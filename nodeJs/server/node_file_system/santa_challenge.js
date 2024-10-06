const fs = require('fs')




// question 1 the total floors santa visits
function question1(){
    fs.readFile('./santa_challenge_input.txt', (err, data) => {
        console.time('fed')
        const readableResult = data.toString()
        const readableResultArray = readableResult.split('')
        let inBasement = false
        const answer = readableResultArray.reduce((acc, currentvalue) => {
            if (currentvalue === '('){
                return acc += 1;
            } else { 
              
                return acc -=1;
            }
        },0)
        console.timeEnd('fed')
        console.log('floor', answer)
    
    
    })
}


// question two when does santa first enter basement
function question2(){
    fs.readFile('./santa_challenge_input.txt', (err, data) => {
        console.time('q2')
        const readableResult = data.toString()
        const readableResultArray = readableResult.split('')
        let accumulator = 0;
        let counter = 0
        // some - loops thru the array if it finds something that matches it stops looping
        const answer = readableResultArray.some((currentvalue) => {
            if (currentvalue === '('){
                 accumulator += 1
            } else {
                 accumulator -=1
            }
            counter++
            return accumulator < 0
        })
        console.timeEnd('q2')
        console.log('basement entered at', counter)
    
    
    })
    
}

question2()