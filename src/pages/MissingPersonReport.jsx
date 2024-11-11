// src/pages/MissingPersonReport.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import '../MissingPersonReport.css';

const MissingPersonReport = () => {
  const [report, setReport] = useState({
    reporterName: '',
    contact: '',
    missingPersonName: '',
    lastSeenLocation: '',
    lastSeenDate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'missingPersonReports'), report);
      alert('Missing person report submitted successfully!');
      setReport({
        reporterName: '',
        contact: '',
        missingPersonName: '',
        lastSeenLocation: '',
        lastSeenDate: '',
        description: '',
      });
    } catch (error) {
      alert(`Error submitting report: ${error.message}`);
    }
  };

  return (
    <div className="missing-person-report-container">
      <h2>Report a Missing Person</h2>
      <form onSubmit={handleSubmit} className="missing-person-report-form">
        <label>Your Name:</label>
        <input 
          type="text" 
          name="reporterName" 
          value={report.reporterName} 
          onChange={handleChange} 
          required 
          placeholder="Enter your name"
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
        <label>Missing Person's Name:</label>
        <input 
          type="text" 
          name="missingPersonName" 
          value={report.missingPersonName} 
          onChange={handleChange} 
          required 
          placeholder="Enter the missing person's name"
        />
        <label>Last Seen Location:</label>
        <input 
          type="text" 
          name="lastSeenLocation" 
          value={report.lastSeenLocation} 
          onChange={handleChange} 
          required 
          placeholder="Enter the last known location"
        />
        <label>Last Seen Date:</label>
        <input 
          type="date" 
          name="lastSeenDate" 
          value={report.lastSeenDate} 
          onChange={handleChange} 
          required 
        />
        <label>Description:</label>
        <textarea 
          name="description" 
          value={report.description} 
          onChange={handleChange} 
          required 
          placeholder="Provide additional details about the missing person"
        />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default MissingPersonReport;
