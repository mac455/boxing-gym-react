import React from 'react';
import '../styles/SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <header className="header-signup">
        <h1>Sign Up</h1>
      </header>
      <div className="signup-form-wrapper">
        <form className="signup-form">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-input" required />

          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" className="form-input" required />

          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-input" required />

          <label htmlFor="confirm-password" className="form-label">Confirm Password:</label>
          <input type="password" id="confirm-password" className="form-input" required />

          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
