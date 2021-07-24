const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

//// Step-1 creating package.json
/// 'npm init' in terminal

/// Step-2 installing express and pug
// 'npm i package_name' in terminal

/// Step-3 creating static and views folder

//// EXPRESS SPECIFIC STUFF
/// Step-5 for serving static files(
app.use('/static', express.static('static'));

/// Step-6 to stop showing req data in the url
app.use(express.urlencoded());

//// PUG SPECIFIC STUFF
/// Step-7 set the template engine as pug
app.set('view engine', 'pug');
/// Step-8 set the views directory
app.set('views', path.join(__dirname, 'views')); //(setting, file path)

/// Step-9 endpoints
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {};
    res.status(200).render('contact.pug', params);
})


//// Step-10 start the server
// Listen to the port
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});