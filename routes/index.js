var express = require('express');
var router = express.Router();
var path = require('path');
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

router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
});

router.get('/signup_success', function(req, res) {
     //   render the page and pass in any flash data if it exists
     	  
          res.json({success:req.user.local.email}); 
});


module.exports = router;
