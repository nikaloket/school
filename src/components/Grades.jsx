import React, { useEffect, useState } from 'react';
import gradesData from '../data/grades.json';

const Grades = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    console.log(gradesData);
    setGrades(gradesData);
  }, []);

  const renderGrade = (grade) => {
    if (grade === null) {
      return "No grade";
    }
    return grade;
  };

  return (
    <div className="container mt-4">
      <h2>Your Grades</h2>
      <table className="grades-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Week 1</th>
            <th>Week 2</th>
            <th>Week 3</th>
            <th>Week 4</th>
            <th>Week 5</th>
            <th>Week 6</th>
            <th>Week 7</th>
            <th>Week 8</th>
            <th>Week 9</th>
            <th>Week 10</th>
          </tr>
        </thead>
        <tbody>
          {grades.length > 0 ? (
            grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subject}</td>
                <td>{renderGrade(grade.week1)}</td>
                <td>{renderGrade(grade.week2)}</td>
                <td>{renderGrade(grade.week3)}</td>
                <td>{renderGrade(grade.week4)}</td>
                <td>{renderGrade(grade.week5)}</td>
                <td>{renderGrade(grade.week6)}</td>
                <td>{renderGrade(grade.week7)}</td>
                <td>{renderGrade(grade.week8)}</td>
                <td>{renderGrade(grade.week9)}</td>
                <td>{renderGrade(grade.week10)}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="11">No grades available</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;
