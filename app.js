require('./config/config')

const express = require('express');
const bodyParser= require('body-parser');
const morgan = require('morgan');
const session = require('cookie-session');
const port = process.env.PORT;
const app= express();

//MiddleWare
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(morgan('dev'));

app.listen(port,function () {
    console.log("Listening on port: ",port);
})