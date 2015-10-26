var mongoose = require("mongoose");
var conn = mongoose.connection;
var uri="mongodb://heroku_vfp6w0c0:1q2w3e4r5t@ds033143.mongolab.com:33143/heroku_vfp6w0c0"
//uncomment the below line if you have mongo running locally 
// var uri="mongodb://localhost/marketapp"
conn.on('error',console.error.bind(console,"mongoose connection error"));
conn.once('open',function(){
  console.log("connected to "+ uri);
});

mongoose.connect(uri);
module.exports =conn;
