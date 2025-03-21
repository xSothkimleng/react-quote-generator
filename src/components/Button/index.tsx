import React, { useState } from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    padding: '0.5rem',
    fontWeight: '500',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: '1px solid lightgray',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'all 0.1s ease',
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}>
      {text}
    </button>
  );
};

export default Button;
