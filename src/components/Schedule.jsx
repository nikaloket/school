import React, { useEffect, useState } from 'react';
import scheduleData from '../data/schedule.json';
import '../styles.css'; 

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(scheduleData);
  }, []);

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">Your Schedule</h2>
      <div className="schedule-grid">
        {schedule.map((day, index) => (
          <div key={index} className="schedule-day-card">
            <div className="day-name">{day.day}</div>
            <ul className="subjects-list">
              {day.subjects.map((subject, idx) => (
                <li key={idx} className="subject-item">
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
