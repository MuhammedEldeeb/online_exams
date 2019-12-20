const mysql = require('mysql');
const express = require('express');

// create an express server
var app = express();




// listen to a port 
app.listen(3000, '127.0.0.1', ()=>{
    console.log('server is listening at the port 3000...');
});