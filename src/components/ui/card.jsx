import React from 'react';

export function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={`px-4 py-2 font-bold ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`px-4 py-2 ${className}`} {...props}>
      {children}
    </div>
  );
}