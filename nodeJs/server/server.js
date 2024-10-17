const http = require('http');

const server = http.createServer((request, response) =>{
    console.log(request.headers)
    console.log(request.methods)
    console.log(request.url)
    console.log(request)

    const user = {
        name :'John',
        hobby: 'skating'
    }
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(user));
})

server.listen(3000);


console.log(process.env)