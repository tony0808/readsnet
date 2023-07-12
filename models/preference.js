const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }
}, {timestamps:true});

const Preference = mongoose.model('Preference', preferenceSchema);

module.exports = Preference;