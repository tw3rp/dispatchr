var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  var options = {
      root: path.join(__dirname + '/../views'),
      dotfiles: 'deny',
    };
  res.render('index');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
