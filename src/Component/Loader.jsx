import React, { useState, useEffect } from 'react';
import './Loader.css';
import clgLogo from '../assets/clg_logo.webp';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 20);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="loader-container">
      {/* College Logo */}
        <div className="college-logo">
            <img src={clgLogo} alt="College Logo" width="100%" />
        </div>
      
      {/* College Name */}
      <h1 className="college-name">CCLMS Management College</h1>
      
      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Loading Text */}
      <p className="loading-text">{progress === 100 ? 'Welcome!' : 'Loading...'}</p>
    </div>
  );
};

export default Loader;