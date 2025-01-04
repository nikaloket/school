import React, { useState } from 'react';

const Help = () => {
  const [message, setMessage] = useState('');
  const [teacher, setTeacher] = useState('');

  const handleSubmit = () => {
    if (!teacher || !message) {
      alert('Please select a teacher and write a message.');
      return;
    }
    alert(`Message to ${teacher}: ${message}`);
    setMessage('');
    setTeacher('');
  };

  return (
    <div className="card">
      <h2 className="card-title">Help</h2>
      <div className="form-group">
        <label htmlFor="teacher" className="form-label">Select a Teacher</label>
        <select
          id="teacher"
          className="form-select"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        >
          <option value="">-- Choose a Teacher --</option>
          <option value="Mr. Smith">Mr. Smith</option>
          <option value="Ms. Johnson">Ms. Johnson</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea
          id="message"
          className="form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          rows="5"
        />
      </div>
      <button className="form-button" onClick={handleSubmit}>Send Message</button>
    </div>
  );
};

export default Help;
