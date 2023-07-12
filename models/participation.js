const mongoose = require('mongoose');

const participationSchema = new mongoose.Schema({
    discussion: {
        type: mongoose.Types.ObjectId,
        ref: 'Discussion'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true});

const Participation = mongoose.model('Participation', participationSchema);

module.exports = Participation;