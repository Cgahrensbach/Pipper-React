import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [pips, setPips] = useState([]); // State to store the pips
  const [newPip, setNewPip] = useState(''); // State to store the new pip content
  const navigate = useNavigate();

  // Handle creating a new pip
  const handleCreatePip = (e) => {
    e.preventDefault();

    // Check if the new pip is not empty
    if (newPip.trim()) {
      const newPipObject = {
        content: newPip,
        createdAt: new Date(),
      };

      // Add the new pip to the beginning of the pips array (newest first)
      setPips([newPipObject, ...pips]);

      // Clear the input field after submitting
      setNewPip('');
    }
  };

  // Handle logout
  const handleLogout = () => {
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li><button onClick={() => navigate('/search')}>Search</button></li>
          <li><button onClick={() => navigate('/register')}>Register</button></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        <h1>Welcome to Pipper's Home Page!</h1>

        {/* Form for creating a new pip */}
        <form onSubmit={handleCreatePip}>
          <textarea
            placeholder="Write a new pip..."
            value={newPip}
            onChange={(e) => setNewPip(e.target.value)}
            rows="4"
            required
          />
          <button type="submit">Create Pip</button>
        </form>

        {/* Display the Pips sorted by newest to oldest */}
        <div className="pips-list">
          <h2>All Pips</h2>
          {pips.length > 0 ? (
            pips.map((pip, index) => (
              <div key={index} className="pip">
                <p>{pip.content}</p>
                <small>{pip.createdAt.toLocaleString()}</small>
              </div>
            ))
          ) : (
            <p>No pips yet. Create one!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
