// including express
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;

//// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files.
// using midware
app.use(express.urlencoded());
// forms data is colleted by express

//// PUG SPECIFIC STUFF/CONFIGURATION
app.set('view engine', 'pug'); // Set the template engine as pug

//// Set the views directory
app.set('views', path.join(__dirname, 'views'));


//// ENDPOINTS
app.get('/',(req, res)=>{
    // to send data to the pug file
    const con = "This is the basic template engine in express js.";
    const params = {'title': 'pug is the best', "content": con};
    // to start rendering
    res.status(200).render('index.pug', params);
});
app.post('/', (req, res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    //these r the name attribute of the input tags NOT ID

    // saving the data 
    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}.`
    fs.writeFileSync('output.txt', outputToWrite) //path,element

    const params = {'message': 'Your form has been submitted successfully'};
    res.status(200).render('index.pug', params);
});

//// pug help
// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', { title:"Family Guy", message: 'Hello there!'});
// });

//// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`);
});