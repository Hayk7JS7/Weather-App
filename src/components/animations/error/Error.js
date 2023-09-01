import React, { useState, useEffect } from 'react';
import './Error.css';

const Error = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`error-container ${show ? 'show' : ''}`}>
      <div className='error-icon'>
        <div className='error-line'></div>
        <div className='error-line'></div>
      </div>
      <div className='error-message'>{message}</div>
    </div>
  );
};

export default Error;