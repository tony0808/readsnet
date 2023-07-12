const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    discussion: {
        type: mongoose.Types.ObjectId,
        ref: 'Discussion',
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true});

const Like = mongoose.Model('Like', likeSchema);

module.exports = Like;