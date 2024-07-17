const express = require('express');
const router = express.Router();
const Book = require('../models/BookModel'); // Adjust the path as necessary

// Route to add a new book
router.post('/', async (req, res) => {
  try {
    const { title, author, description, coverImage } = req.body;
    const newBook = new Book({ title, author, description, coverImage });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to move a book to trash
router.put('/:id/trash', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { trashed: true }, { new: true });
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.status(200).json({ message: 'Book moved to trash', book });
  } catch (error) {
    console.error('Error moving book to trash:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
