// Serving HTML Files using NodeJs

// including http and fs
const http = require('http');
const fs = require('fs');

// reading file content
const fileContent = fs.readFileSync('48setInterval&setTimeOut.html');

// Creating a server
// const server = http.createServer((request, response)=>{});
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    // (response code, header...)
    // to serve the site
    res.end(fileContent);
});

// specifying a port number
server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening on port 80");
});
// (portNumber, localhost)
// portnumber 80 is the default port of localhost