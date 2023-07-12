const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name:String
}, {timestamps:true});

const Club = mongoose.Model('Club', clubSchema);

module.exports = Club;
