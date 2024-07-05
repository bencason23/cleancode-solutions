import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  // Define state variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        email,
        password,
      });
      setMessage(response.data.message);
      setShowAlert(true);
      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
        navigate('/dashboard'); // Navigate to dashboard after successful login
      }, 3000);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Incorrect username or password');
      setShowAlert(true);
      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div className="registration-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {showAlert && <div className="alert">{message}</div>}
      <div className="form-group">
        <p>Don't have an account? <button onClick={() => navigate('/Registration')} className="navigate-button">Register</button></p>
      </div>
    </div>
  );
};

export default Login;
