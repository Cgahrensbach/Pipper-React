import React, { useState } from 'react';
import './Overlaypip.css';

const OverlayPip = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleOverlay = () => setIsVisible(!isVisible);

  return (
    <div>
      <button onClick={toggleOverlay}>Create Pip</button>
      {isVisible && (
        <div className="overlay" onClick={toggleOverlay}>
          <div className="overlay-content">
            <button className="close-overlay" onClick={toggleOverlay}>X</button>
            {/* Overlay content */}
            <textarea placeholder="Enter your content"></textarea>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverlayPip;
