var express =require('express');
var router = express.Router();
var passport =require('passport');

router.get('/', function(req, res) {
     //   render the page and pass in any flash data if it exists
     	  
          res.json({message:req.flash('signupMessage')}); 
});

router.get('/signup_success', function(req, res) {
     //   render the page and pass in any flash data if it exists
     	  
          res.json({message:req.user.local.email}); 
});

router.post('/', passport.authenticate('local-signup', {
        successRedirect : '/signup_success', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
})

);

module.exports = router;