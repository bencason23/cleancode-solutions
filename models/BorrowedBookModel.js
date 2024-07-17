const mongoose = require('mongoose');

const borrowedBookSchema = new mongoose.Schema({
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
});

const BorrowedBook = mongoose.model('BorrowedBook', borrowedBookSchema);

module.exports = BorrowedBook;
