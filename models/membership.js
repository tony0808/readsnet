const mongoose = require('mongoose');

const MembershipSchema = new mongoose.Schema({
    club: {
        type: mongoose.Types.ObjectId,
        ref: 'Club'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true});

const Memebership = mongoose.model('Membership', MembershipSchema);

module.exports = Memebership;