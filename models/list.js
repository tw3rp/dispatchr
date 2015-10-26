var mongoose = require('mongoose');

var listSchema = mongoose.Schema({
    title:String,
    description: String,
    price:Number

});

module.exports = mongoose.model('List',listSchema);
