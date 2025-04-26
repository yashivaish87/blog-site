import React from 'react';

export const Card = ({ children, className, ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);