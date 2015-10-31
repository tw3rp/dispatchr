var index=require("../routes/index");
var cart=require("../routes/cart");
var users= require("../routes/users");
var login= require("../routes/login");
var signup= require("../routes/signup");

var router ={setupRoutes: function(app,passport){
    app.use('/',index);
    app.use('/users',users);
    app.use('/login',login);
    app.use('/signup',signup);
    app.use('/cart',cart);
  }
};

module.exports = router;
