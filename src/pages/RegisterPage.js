import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate to programmatically navigate

  // Handle register form submission
  const handleRegister = (e) => {
    e.preventDefault();
    
    // Perform registration logic (e.g., send data to server, validate)
    if (username && password) {
      navigate('/home');  // Redirect to home page after successful registration
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <input type="submit" value="Register" />
      </form>

      {/* Button to go to Login Page */}
      <p>
        <button onClick={() => navigate('/')}>Already have an account? Login here</button>
      </p>
    </div>
  );
}

export default RegisterPage;
