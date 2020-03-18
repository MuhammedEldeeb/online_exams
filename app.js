const mysql = require('mysql');
const express = require('express');
const userController = require('./controllers/user');
// create an express server
var app = express();
app.set('view engine','ejs');

app.use('/assets',express.static('assets'));
// fire controllers
userController(app);




// listen to a port 
app.listen(3000, '127.0.0.1', ()=>{
    console.log('server is listening at the port 3000...');
});