var mongoose = require('mongoose'),
    category = require("./category"),
    Schema = mongoose.Schema;

    var customeSchema = new Schema({
        Categories:[category]
    },{collection: "Categories"});

    module.exports = mongoose.model("Category",customeSchema);