const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pseudo selectors & more designing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
        <style>
            .container1{
                border: 2px solid red;
                background-color: rgb(199, 255, 199);
                padding: 34px;
                margin: 34px auto;
                width: 666px;
            }
            body{
                font-family: 'Ubuntu', sans-serif;
            }
            a{
                text-decoration: none;
                color: rgb(255, 0, 119);
            }
            a:hover{
                color: rgb(0, 0, 0);
                background-color: antiquewhite;
                font-size: 20px;
            }
            a:visited{
                color:aliceblue;
                background-color: brown;
            }
            a:active{
                background-color: rgb(0, 255, 0);
            }
            .btn{
                background-color: rgb(206, 255, 253);
                padding: 6px;
                border: none;
                cursor: pointer;
                font-size: 13px;
                border-radius: 4px;
            }
            .btn:hover{
                color: darkgoldenrod;
                background-color: azure;
                font-size: 20px;
                border: 2px solid black;
            }
        </style>
    </head>
    <body>
        <div class="container1" id="cont1">
            <h3>This is my heading</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit perspiciatis, minima vero similique, pariatur incidunt delectus iure, vel alias voluptate velit! Rem quo fugit corrupti magnam itaque veritatis, expedita in aliquam nobis cupiditate facilis.</p>
            <a href="https://google.com" class="btn">Read More</a>
            <button class="btn">Contact Us</button>
        </div>
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});