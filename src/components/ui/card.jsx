import React from 'react';

export function Card({ children, className, ...props }) {
  return (
    <div className={`bg-gray-800 rounded-lg shadow-md border border-red-500 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={`px-4 py-3 font-bold text-red-500 text-lg border-b border-red-500 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`px-4 py-3 text-white ${className}`} {...props}>
      {children}
    </div>
  );
}