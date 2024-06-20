
import React from 'react';
import '../styles/CustomButton.css';

const CustomButton = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="custom-button">
      {children}
    </button>
  );
};

export default CustomButton;
