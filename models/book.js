const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    publisher:String,
    publish_date:Date,
    isbn:String,
    genre:String
}, {timestamps:true});

const Book = mongoose.Model('Book', bookSchema);

module.exports = Book;