import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
import Grades from './components/Grades';
import Store from './components/Store';
import Help from './components/Help';
import './styles.css';

function App() {
  const [points, setPoints] = useState(300); 

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/grades" element={<Grades />} />
          <Route
            path="/store"
            element={<Store points={points} setPoints={setPoints} />} 
          />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
