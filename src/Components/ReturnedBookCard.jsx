// ReturnedBookCard.jsx

import React from 'react';


const ReturnedBookCard = ({ book, addToTrash }) => (
  <div className="book-card">
    <img src={book.coverImage} alt={book.title} />
    <h3>{book.bookId}</h3>
    <p>{book.borrowerName}</p>
    <p>{book.borrowerId}</p>
    <p>{book.returnDate}</p>
    <p>{book.condition}</p>
    <button onClick={() => addToTrash(book._id)}>Add to Trash</button>
  </div>
);

export default ReturnedBookCard;
