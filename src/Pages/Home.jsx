// App.js

import React from 'react';
import Header from '../Components/Header'; // Import Header component
import './Home.css';
import Footer from '../Components/Footer';

// Sample data for book cards
const books = [
  {
    id: 1,
    title: 'Newyork times best seller',
    author: 'Scott Galloway',
    
    imageUrl: 'economics 2.jpeg',
  },
  {
    id: 2,
    title: 'The economics book',
    author: 'Big ideas',
    
    imageUrl: 'economics 1.jpeg',
  },
  {
    id: 3,
    title: 'The wealth of nations',
    author: 'Adam Smith',
    
    imageUrl: 'economics 3.jpeg',
  },
  {
    id: 4,
    title: 'The Dolls House',
    author: 'Henrik ibsen',
    
    imageUrl: 'dolls house.jpeg',
  },
  {
    id: 5,
    title: 'The inheritance games',
    author: 'Jennifer lynnes bernes',
    
    imageUrl: 'inheritance games collection.jpeg',
  },
  {
    id: 6,
    title: 'The inheritance',
    author: 'David mulwa',
    
    imageUrl: 'inheritance.jpeg',
  },
  {
    id: 7,
    title: 'Book 7',
    author: 'Author 7',
    
    imageUrl: 'economics 3.jpeg',
  },
  {
    id: 8,
    title: 'Book 8',
    author: 'Author 8',
    
    imageUrl: 'code complete.jpg',
  },
  {
    id: 9,
    title: 'Book 9',
    author: 'Author 9',
    
    imageUrl: 'economics 1.jpeg',
  },
  {
    id: 10,
    title: 'Book 10',
    author: 'Author 10',
    
    imageUrl: 'economics 3.jpeg',
  },
  {
    id: 11,
    title: 'Book 11',
    author: 'Author 11',
    
    imageUrl: 'economics 2.jpeg',
  },
  {
    id: 12,
    title: 'Book 12',
    author: 'Author 12',
    
    imageUrl: 'economics 1.jpeg',
  },
  {
    id: 13,
    title: 'Book 13',
    author: 'Author 13',
    
    imageUrl: 'program.jpeg',
  },
  {
    id: 14,
    title: 'Book 14',
    author: 'Author 14',
    
    imageUrl: 'inheritance games collection.jpeg',
  },
  {
    id: 15,
    title: 'Book 15',
    author: 'Author 15',
    
    imageUrl: 'economics 1.jpeg',
  },
  {
    id: 16,
    title: 'Book 16',
    author: 'Author 16',
    
    imageUrl: 'inheritance.jpeg',
  },
  {
    id: 17,
    title: 'Book 17',
    author: 'Author 17',
    
    imageUrl: 'program.jpeg',
  },
  {
    id: 17,
    title: 'Book 17',
    author: 'Author 17',
    
    imageUrl: 'python.jpeg',
  },
];

const BookCard = ({ book }) => (
  <div className="book-card">
    <img src={book.imageUrl} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <p>{book.price}</p>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header /> {/* Render Header component */}
      <h1>Featured books</h1>
      <div className="book-container">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
