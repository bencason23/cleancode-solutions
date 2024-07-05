import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Footer from '../Components/Footer';

const BookCard = ({ book, addToTrash }) => (
  <div className="book-card">
    <img src={book.coverImage} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <p>{book.price}</p>
    <p>{book.description}</p>
    <p>{book._id}</p>
    <button onClick={() => addToTrash(book._id)}>Add to Trash</button>
  </div>
);

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const addToTrash = async (bookId) => {
    try {
      await axios.post(`http://localhost:3000/books/${bookId}/trash`);
      console.log('Book added to trash:', bookId);
      // Optionally, update the books state to reflect the change
    } catch (error) {
      console.error('Error adding book to trash:', error);
    }
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <img src="image.png" alt="Library Logo" className="logo" />
        </div>
        <div className="header-right">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-bar"
          />
          <HamburgerMenu
            isOpen={menuOpen}
            menuClicked={handleMenuClick}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </header>
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      
        <Link to="/NewBookForm">
          <button>Add Books</button>
        </Link>
        <Link to="/BorrowedBook">
          <button>Borrowed Books</button>
        </Link>
        <button>All Books</button>
        <button>Trashbin</button>
        <Link to="/ReturnedBooksDashboard">
          <button>Returned Books</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="book-container">
        <p className="books-count">{filteredBooks.length} books available</p>
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} addToTrash={addToTrash} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
