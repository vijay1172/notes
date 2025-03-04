// src/components/Notice.js
import React from "react";
import "./Notice.css";

const Notice = ({ title, description, date }) => {
  return (
    <div className="notice">
      <h3>{title}</h3>
      <p>{description}</p>
      <small>Date: {date}</small>
    </div>
  );
};

const NoticeContainer = ({ notices }) => {
  return (
    <div className="notice-container">
      {notices.map((notice, index) => (
        <Notice
          key={index}
          title={notice.title}
          description={notice.description}
          date={notice.date}
        />
      ))}
    </div>
  );
};

export default NoticeContainer;
