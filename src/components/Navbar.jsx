// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import '../Navbar.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Set to true if user is logged in
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  return (
    <nav className="Navbar">
      <h2 className="logo">Crime Reporting System</h2>
      <ul className="nav-links">
        {isAuthenticated ? (
          // Links to show only when the user is logged in
          <>
            <li><Link to="/crime-report">Crime Report</Link></li>
            <li><Link to="/missing-person-report">Missing Person Report</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        ) : (
          // Links to show when the user is not logged in
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
