var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var    cat = new Schema({
        id:Number,
        title:String,
        visitors:Number,
        expectancy:Number,
        revenue:Number
    });

    module.exports=cat;