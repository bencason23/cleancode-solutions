// backend/models/ReturnedBook.js

const mongoose = require('mongoose');

const returnedBookSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true,
  },
  borrowerName: {
    type: String,
    required: true,
  },
  borrowerId: {
    type: String,
    required: true,
  },
  borrowDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
});

const ReturnedBook = mongoose.model('ReturnedBook', returnedBookSchema);

module.exports = ReturnedBook;
