// src/components/LoginSignupModal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignupModal = ({ showModal, handleClose }) => {
  const navigate = useNavigate();

  if (!showModal) return null;

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Please Log In or Sign Up</h2>
        <p>To add products to your cart, you need to log in or sign up.</p>
        <div>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
