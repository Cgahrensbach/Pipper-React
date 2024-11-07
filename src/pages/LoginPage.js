import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate to programmatically navigate

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Perform login validation (e.g., check username/password)
    if (username && password) {
      navigate('/home');  // Redirect to home page after successful login
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>

      {/* Button to go to Register Page */}
      <p>
        <button onClick={() => navigate('/register')}>Don't have an account? Register here</button>
      </p>
    </div>
  );
}

export default LoginPage;
