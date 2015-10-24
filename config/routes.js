var index=require("../routes/index");
var users= require("../routes/users");

var router ={setupRoutes: function(app,passport){
    app.use('/',index);
    app.use('/users',users);
  }
};

module.exports = router;
