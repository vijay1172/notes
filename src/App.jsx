import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SubjectCard from "./components/SubjectCard";
import NoticeContainer from "./components/Notice";
import "./App.css";

const subjects = [
  {
    subject: "Antenna",
    driveLink:
      "https://drive.google.com/drive/folders/1Rr9SpEb-b4RaDIdADPLPQOBeb8QtfGtu",
  },
  {
    subject: "Wireless",
    driveLink:
      "https://drive.google.com/drive/folders/1s7-CgcPFlbOAw9TPFP5vK074TvZObVIJ",
  },
  {
    subject: "VLSI Design",
    driveLink:
      "https://drive.google.com/drive/folders/1RlXB7tUmsBrjyDlbiyBN5pFGoNv0t80m",
  },
];

const motivationalQuotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
];

const notices = [
  {
    title: "Mid-Term Exams Schedule",
    description:
      "The mid-term exams will start from March 5th. Check the timetable for more details.",
    date: "2025-03-03",
  },
  {
    title: "New Notes Uploaded",
    description:
      "Notes for VLSI Design have been uploaded.Check now!",
    date: "2025-03-03",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    const randomQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <div className="subject-grid">
            {subjects.map((sub, index) => (
              <SubjectCard
                key={index}
                subject={sub.subject}
                driveLink={sub.driveLink}
              />
            ))}
          </div>
          <div className="notice-section">
            <h2>Notices</h2>
            <NoticeContainer notices={notices} />
          </div>
          <div className="quote-container">
            <p className="quote">{quote}</p>
          </div>
          <div>
            <p>Best of Luck !</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
