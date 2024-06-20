import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import QUESTIONS_BY_SUBJECT from '../data/questions';
import CustomButton from '../components/CustomButton';
import CustomDialog from '../components/CustomDialog';
import '../styles/Styles.css';
import '../styles/CustomButton.css';

const StartTest = () => {
  const [user, setUser] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds for each question
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const saveScore = (subject, score, status) => {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push({ subject, score, status });
    localStorage.setItem('scores', JSON.stringify(scores));
  };

  const handleAnswer = useCallback((isCorrect) => {
    let newScore = score;
    if (isCorrect) {
      newScore += 2;
    } else {
      newScore -= 1;
    }
    setScore(newScore);

    if (currentQuestionIndex + 1 < QUESTIONS_BY_SUBJECT[user.subject].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    } else {
      // Calculate pass/fail status after the last question
      const passThreshold = 0.6 * QUESTIONS_BY_SUBJECT[user.subject].length * 2;
      const result = newScore >= passThreshold ? 'You passed!' : 'You failed!';
      setDialogContent(`Your final score is ${newScore}. ${result}`);
      saveScore(user.subject, newScore, result);
      setShowDialog(true);
      
      setTimeout(() => {
        navigate('/user');
      }, 5000);
    }
  }, [score, currentQuestionIndex, user?.subject, navigate]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(false); // Consider unanswered question as wrong
      return; // Exit if timeLeft is 0 to avoid setting a new timer
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, handleAnswer]);

  if (!user) return null;

  const currentQuestion = QUESTIONS_BY_SUBJECT[user.subject][currentQuestionIndex];

  return (
    <div className="fade-in">
      <h1>Quiz: {user.subject}</h1>
      <p>{currentQuestion.question}</p>
      <p>Time left: {timeLeft}s</p>
      <div>
        {currentQuestion.options.map((option, index) => (
          <CustomButton
            key={index}
            onClick={() => handleAnswer(option === currentQuestion.answer)}
          >
            {option}
          </CustomButton>
        ))}
      </div>

      <CustomDialog
        open={showDialog}
        onClose={() => navigate('/greeting')}
        title="Quiz Completed"
        content={dialogContent}
      />

    </div>
  );
};

export default StartTest;
