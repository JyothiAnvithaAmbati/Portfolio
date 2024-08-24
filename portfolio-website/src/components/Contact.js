import './Contact.css';
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/contact/', { name, email, message })
      .then(response => {
        alert('Message sent!');
        setName('');
        setEmail('');
        setMessage('');
        setError('');
      })
      .catch(error => {
        console.error('Error sending message', error);
        setError('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Send</button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
};

export default Contact;
