
import React from 'react';

/**
 * Header component displays the application's name and a brief description.
 */
const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Image Segmentation App</h1>
      <p>Segment your images using advanced AI technology.</p>
    </header>
  );
};

// Styles for the header component
const headerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  color: 'black',
  borderBottom: '1px solid #ccc',
};

export default Header;