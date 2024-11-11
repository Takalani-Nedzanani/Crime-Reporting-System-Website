// src/components/Logout.js
import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    alert('You have logged out');
    navigate('/login');
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to log out?</h2>
      <p>You can always log back in to continue using the system.</p>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Logout;
