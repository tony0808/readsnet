const mongoose = require('mongoose');

const friendshipSchema = new mongoose.Schema({
    userA: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    userB: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true});

const Friendship = mongoose.Model('Friendship', friendshipSchema);

module.exports = Friendship;
