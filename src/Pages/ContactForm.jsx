// ContactForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import '../Components/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Send email via EmailJS
    emailjs
      .send(
        'service_k8ff19p', // Replace with your EmailJS service ID
        'service_k8ff19p', // Replace with your EmailJS template ID
        templateParams,
        '2vrYHcqI7RhLVyaHn' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('Failed to send email:', error);
          setStatusMessage('Failed to send message. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Subject:
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
