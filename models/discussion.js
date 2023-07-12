const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    description:String,
    title:String,
    content:String
}, {timestamps:true});

const Discussion = mongoose.Model('Discussion', discussionSchema);

module.exports = Discussion;