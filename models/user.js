const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    username:String,
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'profile'
    }
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;