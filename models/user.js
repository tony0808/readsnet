const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    username:String,
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'profile',
        default: null
    }
}, {timestamps:true});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;