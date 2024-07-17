// routes/ReturnedBookRoute.js

const express = require('express');
const router = express.Router();
const ReturnedBook = require('../models/ReturnedBookModel');

// Route to add a new returned book
router.post('/', async (req, res) => {
  try {
    const { bookId, borrowerName, borrowerId, borrowDate, returnDate, condition } = req.body;
    const newReturnedBook = new ReturnedBook({ bookId, borrowerName, borrowerId, borrowDate, returnDate, condition });
    await newReturnedBook.save();
    res.status(201).json({ message: 'Returned book added successfully', returnedBook: newReturnedBook });
  } catch (error) {
    console.error('Error adding returned book:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch all returned books
router.get('/', async (req, res) => {
  try {
    const returnedBooks = await ReturnedBook.find();
    res.status(200).json(returnedBooks);
  } catch (error) {
    console.error('Error fetching returned books:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
