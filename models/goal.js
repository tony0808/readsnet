const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    content: String
}, {timestamps:true});

const Goal = mongoose.Model('Goal', goalSchema);

module.exports = Goal;