// including express
const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files

// PUG SPECIFIC STUFF/CONFIGURATION
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory


// ENDPOINTS
app.get('/',(req, res)=>{
    // to send data to the pug file
    const con = "This is the basic template engine in express js.";
    const params = {'title': 'pug is the best', "content": con};
    // to start rendering
    res.status(200).render('index.pug', params);
});

// pug help
// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', { title:"Family Guy", message: 'Hello there!'});
// });

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`);
});