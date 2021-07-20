// Installing Express and Postman 70

// including express
const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'));
// link, folder
// static files means itll be shown as it is 
// for this case the index.js will not be exectued

// Template engine installed 'pug'

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
// this join is used for string joining
// __dirname == base dir name

// Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', { title:"Family Guy", message: 'Hello there!'});
});


// if / is open then there will be a callback
app.get("/", (req, res)=>{
    res.send("This is Home Page of my first express app");
});
app.get("/about", (req, res)=>{
    res.send("This is About Page of my first express app");
});

// u can also send the status code
app.get("/contact", (req, res)=>{
    res.status(200).send("This is Contact Us Page of my first express app");
});

// 404
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found");
});

// POST
app.post("/contact", (req, res)=>{
    res.send("This is post request Contact Us Page of my first express app");
});

// Listening to a port
app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`);
});