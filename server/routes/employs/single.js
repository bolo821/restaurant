const express = require('express');
const app = express();
const path = require('path');
module.exports = (req, res) => {
   const employ = req.employ;
  // app.set("view engine", "pug");
  // app.set("views", path.join(__dirname, "views"));

  res.status(200).json({ employ });  
  // var emp=status(200).json({employ});
   // res.render("person", {employ});
//console.log({employ})
};
