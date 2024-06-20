import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const TestInfo = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && subject) {
      localStorage.setItem('user', JSON.stringify({ name, subject }));
      navigate('/start');
    } else {
      alert('Please enter your name and select a subject');
    }
  };

  return (
    <div>
      <h1>Quiz Application</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select a subject</option>
          <option value="science">Science</option>
          <option value="math">Math</option>
          <option value="aptitude">Aptitude</option>
          <option value="general_knowledge">General Knowledge</option>
          <option value="java">Java</option>
          <option value="html">HTML</option>
          <option value="javascript">JavaScript</option>
        </select>
        
        <CustomButton onClick={handleSubmit}>Start Quiz</CustomButton>
      </div>
    </div>
  );
};

export default TestInfo;
