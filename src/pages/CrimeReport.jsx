// src/pages/CrimeReport.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import '../CrimeReport.css';

const CrimeReport = () => {
  const [report, setReport] = useState({
    reporterName: '',
    address: '',
    contact: '',
    description: '',
    suspectDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'crimeReports'), report);
      alert('Crime reported successfully!');
      setReport({ reporterName: '', address: '', contact: '', description: '', suspectDescription: '' });
    } catch (error) {
      alert(`Error reporting crime: ${error.message}`);
    }
  };

  return (
    <div className="crime-report-container">
      <h2>Report a Crime</h2>
      <form onSubmit={handleSubmit} className="crime-report-form">
        <label>Name:</label>
        <input 
          type="text" 
          name="reporterName" 
          value={report.reporterName} 
          onChange={handleChange} 
          required 
          placeholder="Enter your name"
        />
        <label>Address:</label>
        <input 
          type="text" 
          name="address" 
          value={report.address} 
          onChange={handleChange} 
          required 
          placeholder="Enter your address"
        />
        <label>Contact Details:</label>
        <input 
          type="text" 
          name="contact" 
          value={report.contact} 
          onChange={handleChange} 
          required 
          placeholder="Enter your contact details"
        />
        <label>Description of the Crime:</label>
        <textarea 
          name="description" 
          value={report.description} 
          onChange={handleChange} 
          required 
          placeholder="Describe the crime"
        />
        <label>Description of the Suspect:</label>
        <textarea 
          name="suspectDescription" 
          value={report.suspectDescription} 
          onChange={handleChange} 
          required 
          placeholder="Describe the suspect"
        />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default CrimeReport;
