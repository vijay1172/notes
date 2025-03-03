// src/components/SubjectCard.js
import React from 'react';
import './SubjectCard.css';

const SubjectCard = ({ subject, driveLink }) => {
  return (
    <div
      className="subject-card"
      onClick={() => window.open(driveLink, '_blank')}
    >
      <h3>{subject}</h3>
      <p>Click to view notes</p>
    </div>
    
  );
};

export default SubjectCard;