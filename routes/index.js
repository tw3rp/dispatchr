var express = require('express');
var router = express.Router();
var path = require('path');
var List= require('../models/list.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  var options = {
      root: path.join(__dirname + '/../views'),
      dotfiles: 'deny',
    };
  res.render('index',{ message: req.flash('signupMessage') });
  // res.render('index', { title: 'Express' });
});

router.get('/login_success', function(req, res) {
     //   render the page and pass in any flash data if it exists
          res.json({success:req.user.local.email}); 
});

router.get('/getUserData', function(req, res) {
     //   render the page and pass in any flash data if it exists
          res.json(req.user); 
});


router.post('/postObject', function(req, res) {
     //   render the page and pass in any flash data if it exists
           List.findOne({'title':req.body.title}, function(err,listObject){
            if(err){
              return err;
            }
            if(listObject){
              res.json({message:"There is already an object with this title"})
            }
            else{
              var newListObject = new List();
              newListObject.title =req.body.title;
              newListObject.description = req.body.description;
              newListObject.price = req.body.price;
              newListObject.save(function(err){
                if(err)
                  throw err;
                res.json({success:"successfully saved"})
              })
            }
           
           })
});


router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
});

router.get('/signup_success', function(req, res) {
     //   render the page and pass in any flash data if it exists
     	  
          res.json({success:req.user.local.email}); 
});


module.exports = router;
