// BookCard.jsx
import React from 'react';
import axios from 'axios';

const BookCard = ({ book, onTrash }) => {
  const handleTrash = async () => {
    try {
      await axios.delete(`http://localhost:3000/books/${book._id}`);
      onTrash(book._id); // Update the state in the parent component
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <button onClick={handleTrash}>Delete Book</button>
    </div>
  );
};

export default BookCard;
