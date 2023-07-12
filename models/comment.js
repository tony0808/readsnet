const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content:String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    discussion: {
        type: mongoose.Types.ObjectId,
        ref: 'Discussion'
    }
}, {timestamps:true});

const Comment = mongoose.Model('Comment', commentSchema);

module.exports = Comment;