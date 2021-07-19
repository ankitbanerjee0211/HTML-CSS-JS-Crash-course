// Installing Express and Postman 70

// including express
const express = require('express');

const app = express();
const port = 80;

// if / is open then there will be a callback
app.get("/", (req, res)=>{
    res.send("This is Home Page of my first express app");
});
app.get("/about", (req, res)=>{
    res.send("This is About Page of my first express app");
});

// u acn also send the status code
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