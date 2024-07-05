import React, { useState } from 'react';
import axios from 'axios';


const ReturnedBookForm = () => {
  const [formData, setFormData] = useState({
    bookId: '',
    borrowerName: '',
    borrowerId: '',
    borrowDate: '',
    returnDate: '',
    condition: '',
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
      const response = await axios.post('http://localhost:3000/returned-books', formData);
      if (response.status === 201) {
        setMessage('Returned book added successfully');
        setShowAlert(true);
        setFormData({
          bookId: '',
          borrowerName: '',
          borrowerId: '',
          borrowDate: '',
          returnDate: '',
          condition: '',
        });
      } else {
        throw new Error('Failed to add returned book');
      }
    } catch (error) {
      setMessage('Error adding returned book');
      setShowAlert(true);
      console.error('Error adding returned book:', error);
    }
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
        <div className="form-group">
          <label>Return Date:</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Condition:</label>
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Return Book</button>
      </form>
    </div>
  );
};

export default ReturnedBookForm;
