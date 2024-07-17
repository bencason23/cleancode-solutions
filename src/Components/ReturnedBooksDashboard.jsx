import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ReturnedBookCard = ({ book }) => (
  <div className="book-card">
    <img src={book.coverImage} alt={book.title} />
    <h3>{book.bookId}</h3>
    <p>{book.borrowerName}</p>
    <p>{book.borrowerId}</p>
    <p>{book.returnDate}</p>
    <p>{book.condition}</p>
  </div>
);

function ReturnedBooksDashboard() {
  const [books, setBooks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/returned-books');
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

  const filteredBooks = books.filter(book =>
    book.bookId.toLowerCase().includes(searchQuery.toLowerCase())
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
            placeholder="Search returned books..."
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
        <Link to="/BorrowedBookForm">
          <button>Add Borrowed Books</button>
        </Link>
        <Link to="/Dashboard">
          <button>All books</button>
        </Link>
        <button>Trashbin</button>
        <Link to="/ReturnedBookForm">
          <button>Add Returned Books</button>
        </Link>
      </div>
      <div className="book-container">
        <p className="books-count">{filteredBooks.length} returned books available</p>
        {filteredBooks.map((book) => (
          <ReturnedBookCard key={book._id} book={book} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ReturnedBooksDashboard;
