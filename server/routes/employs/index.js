const restaurant = require('express').Router();
const all = require('./all');
const single = require('./single');
const data = require('../../data.json');

const fs = require("fs");

const findObject = require('../../utils/findObject');
const { response } = require('express');

restaurant.param('employId', findObject('employ'));


restaurant.post('/:employId',(req,res)=>{
   const employe=req.employ;
   console.log(employe);
    val=data.employs.indexOf(employe)
    console.log(val)
    data.employs.splice(val,1)
    fs.writeFile("data.json",JSON.stringify(data),err=>{
      if(err) throw err;
   
   })
    
}) 
restaurant.get('/:employId', single);
restaurant.use('/', all);

module.exports = restaurant;
