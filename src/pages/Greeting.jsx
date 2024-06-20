import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Greeting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Thank you for taking the quiz!</h1>
      <button onClick={() => navigate('/')}>Return to Home</button>
    </div>
  );
};

export default Greeting;
