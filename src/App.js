// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CrimeReport from './pages/CrimeReport';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ForgotPassword from './pages/ForgotPassword';
import MissingPersonReport from './pages/MissingPersonReport';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/crime-report" element={<CrimeReport />} />
          <Route path="/missing-person-report" element={<MissingPersonReport />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
