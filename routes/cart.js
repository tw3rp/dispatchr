var express = require('express');
var router = express.Router();
var List= require('../models/list.js');

router.get('/', loggedIn ,function(req, res, next) {
  var objectstobesent =[];
  for (var i=0;i<req.session.itemincart.length;i++){
  	console.log(i);
  	List.findOne({_id:req.session.itemincart[i]}, function(err,item){
  		console.log(item);
  		if (err){
  			res.send(err);
  		}
  		else{
  		 objectstobesent.push(item);
  		}
  	
  	});
  }
  
  	
		  	

  
  res.render('cart',{item:objectstobesent});
  });

router.post('/:id', loggedIn ,function(req, res, next) {
   
   req.session.itemincart.push(req.params.id);
   req.session.save();
   console.log(req.session.itemincart);

  res.send("recieved");
  });



function loggedIn(req, res, next) {
    if (req.user) {
            next();
        } else {
                res.redirect('/login_new');
            }
}

module.exports = router;

