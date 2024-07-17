import React, { useState } from 'react';
import axios from 'axios';
import './NewBookForm.css'; // Import the CSS file

const NewBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: '',
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
      const response = await axios.post('http://localhost:3000/books', formData); // Corrected endpoint
      if (response.status === 201) {
        setMessage('Book added successfully');
        setShowAlert(true);
        // Optionally, reset the form after successful submission
        setFormData({
          title: '',
          author: '',
          description: '',
          coverImage: '',
        });
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      setMessage('Error adding book');
      setShowAlert(true);
      console.error('Error adding book:', error);
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
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Cover Image URL:</label>
          <input
            type="text"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default NewBookForm;