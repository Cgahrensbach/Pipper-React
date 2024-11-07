import React from 'react';
import './Sidebar.css'; // Make sure the CSS file is in the same folder or adjust path

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar content */}
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
