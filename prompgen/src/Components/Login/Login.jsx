import React, { useState } from 'react';
import './Login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., API call

    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* <div className="login-header">
          <img src="twitter-logo.png" alt="Twitter Logo" className="logo" />
        </div> */}
        <div className="login-body">
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
            />
            <button type="submit" className="login-button">Log in</button>
          </form>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
