// Bring in our dependencies
const express = require('express');
const bodyParser=require("body-parser");
const router= express.Router();
const path = require('path');
const app = require('express')();
const routes = require('./routes');
const fs=require('fs');
const multer=require('multer');
const request=require('request');
const url=require('url');
const progress =require('progress-stream');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/', routes);



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
