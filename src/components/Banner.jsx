// components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', marginBottom:'2em' }}>
      <img
         src={`${process.env.PUBLIC_URL}/banner1.jpg`} // Replace this with your actual banner image URL
        alt="Banner"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',

        }}
      />
    </div>
  );
};

export default Banner;
