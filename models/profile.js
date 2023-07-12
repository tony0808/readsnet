const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    content:String
}, {timestamps:true});

const Profile = mongoose.Model('Profile', profileSchema);

module.exports = Profile;