import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router
import HomePage from './pages/HomePage'; // Adjust path if needed
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import './App.css'; // Importing the consolidated CSS file

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route is LoginPage */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Other Routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
