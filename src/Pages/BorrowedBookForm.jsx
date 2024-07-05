import React, { useState } from 'react';
import axios from 'axios';
import './BorrowedBookForm.css'; // Import the CSS file

const BorrowedBookForm = () => {
  const [formData, setFormData] = useState({
    bookId: '',
    borrowerName: '',
    borrowerId: '',
    borrowDate: '',
  });
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/borrowed-books', formData); // Corrected endpoint
      if (response.status === 201) {
        setMessage('Borrowed book added successfully');
        setShowAlert(true);
        // Optionally, reset the form after successful submission
        setFormData({
          bookId: '',
          borrowerName: '',
          borrowerId: '',
          borrowDate: '',
        });
      } else {
        throw new Error('Failed to add borrowed book');
      }
    } catch (error) {
      setMessage('Error adding borrowed book');
      setShowAlert(true);
      console.error('Error adding borrowed book:', error);
    }
    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="form-container">
      {showAlert && <div className="alert">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book ID:</label>
          <input
            type="text"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Borrower Name:</label>
          <input
            type="text"
            name="borrowerName"
            value={formData.borrowerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Borrower ID:</label>
          <input
            type="text"
            name="borrowerId"
            value={formData.borrowerId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Borrow Date:</label>
          <input
            type="date"
            name="borrowDate"
            value={formData.borrowDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Borrow Book</button>
      </form>
    </div>
  );
};

export default BorrowedBookForm;
