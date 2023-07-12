const mongoose = require('mongoose');

const goalSetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    goal: {
        type: mongoose.Types.ObjectId,
        ref: 'Goal'
    }
}, {timestamps:true});

const GoalSet = mongoose.Model('GoalSet', goalSetSchema);

module.exports = GoalSet;