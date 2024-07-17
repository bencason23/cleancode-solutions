const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true }, // Removed the validate block
  createdAt: { type: Date, default: Date.now },
});

// Create the Book model using the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
