const express = require('express');
const app= express();
const bodyParser= require('body-parser');
const morgan = require('morgan');


//MiddleWare
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(morgan('dev'));

