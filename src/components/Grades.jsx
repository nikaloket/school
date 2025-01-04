import React, { useEffect, useState } from 'react';
import gradesData from '../data/grades.json';

const Grades = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    setGrades(gradesData);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Grades</h2>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            {grade.subject}: {grade.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grades;
