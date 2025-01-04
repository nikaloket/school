import React, { useEffect, useState } from 'react';
import scheduleData from '../data/schedule.json';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(scheduleData);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Schedule</h2>
      <ul>
        {schedule.map((day, index) => (
          <li key={index}>
            <strong>{day.day}</strong>: {day.subjects.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
