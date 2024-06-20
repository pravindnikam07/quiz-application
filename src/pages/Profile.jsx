import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';
import '../styles/CustomButton.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userScores = JSON.parse(localStorage.getItem('scores')) || [];
    if (userData) {
      setUser(userData);
      setScores(userScores);
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="profile-container">
      
      <div className="profile-header">
        <h1>User Details</h1>
      </div>
      
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      
      <div className="profile-scores">
        <h2>Quiz Scores</h2>
        
        <ul>
          {scores.map((score, index) => (
            <li key={index}>
              <strong>Subject:</strong> {score.subject} - <strong>Score:</strong> {score.score} - <strong>Status:</strong> {score.status}
            </li>
          ))}
        </ul>
      
      </div>
      
      <button className="custom-button" onClick={() => navigate('/greeting')}>Back to Home</button>
    </div>
  );
};

export default Profile;
