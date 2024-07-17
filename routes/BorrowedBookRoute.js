const express = require('express');
const router = express.Router();
const BorrowedBook = require('../models/BorrowedBookModel'); // Adjust the path as necessary

// Route to add a new borrowed book
router.post('/', async (req, res) => {
  try {
    const { bookId, borrowerName, borrowerId, borrowDate } = req.body;
    const newBorrowedBook = new BorrowedBook({ bookId, borrowerName, borrowerId, borrowDate });
    await newBorrowedBook.save();
    res.status(201).json({ message: 'Borrowed book added successfully', borrowedBook: newBorrowedBook });
  } catch (error) {
    console.error('Error adding borrowed book:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch all borrowed books
router.get('/', async (req, res) => {
  try {
    const borrowedBooks = await BorrowedBook.find();
    res.status(200).json(borrowedBooks);
  } catch (error) {
    console.error('Error fetching borrowed books:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
