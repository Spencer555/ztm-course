const http = require('node:http');

const hostname = '127.0.0.1';
const port = process.env.PORT;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    // console.log('process', process.env)
    console.log(`Server running at http://${hostname}:${port}/`);
});

// process.env tell you the env you are running from 
// so to set the port u can do process.env.PORT

console.log(process.env)


/**
 List all environment variables: set
 

 Print a particular environment variable: echo %ProgramFiles%

 Set Environment Variables
To set persistent environment variables at the command line, we will use setx.exe. It became part of Windows as of Vista/Windows Server 2008. Prior to that, it was part of the Windows Resource Kit. 

setx.exe does not set the environment variable in the current command prompt, but it will be available in subsequent command prompts.

to set the env var
setx EC2_CERT "%USERPROFILE%\aws\cert.pem"

e.g 
setx PORT "3000"

to view what u have set
echo %EC2_CERT%

 */