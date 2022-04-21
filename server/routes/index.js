const routes = require('express').Router();
const restaurant = require('./employs');

const data = require('../data.json');
const res = require('express/lib/response');
const fs =require("fs");
const express = require('express');
const bodyParser=require("body-parser");
const router= express.Router();
const path = require('path');
const multer=require('multer');
const request=require('request');
const url=require('url');
const progress =require('progress-stream');



routes.use('/restaurant',restaurant);

routes.use('/addemp',(request,response)=>{
   var employe=data.employs;
   var v1=employe.length-1;
   var v2=Number(employe[v1].Id)+1;
   console.log(v2)
   const newemploye={"Id":v2,"Name":"","Middlename":"","Surname":"","DateofBirth":"","Nationality":"","ContactPhone":"","ContactAddress":"","Record":"","image":""};
   employe.push(newemploye);
   fs.writeFile("data.json",JSON.stringify(data),err=>{
      if(err) throw err;
   
   })
   response.status(200).json({newemploye});
});


module.exports = routes;
