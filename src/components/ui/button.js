// src/components/ui/button.js
import React from 'react';

const Button = ({ children, onClick, size = 'md', className = '' }) => {
  let sizeClasses = 'px-6 py-3 text-lg';
  if (size === 'sm') {
    sizeClasses = 'px-4 py-2 text-base';
  } else if (size === 'lg') {
    sizeClasses = 'px-8 py-4 text-xl';
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-full transition-all duration-300 transform hover:scale-105 ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
