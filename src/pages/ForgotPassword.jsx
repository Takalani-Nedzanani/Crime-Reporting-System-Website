// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import '../ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Please check your inbox.');
      setEmail('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Reset Your Password</h2>
      <p>Enter your email to receive password reset instructions.</p>
      <form onSubmit={handleResetPassword} className="forgot-password-form">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder="Enter your email"
        />
        <button type="submit">Send Reset Email</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="back-to-login-link">
        Remembered your password? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
