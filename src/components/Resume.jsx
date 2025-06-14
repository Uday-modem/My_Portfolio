import React from 'react';
import Resume from '../assets/SR_Resume.pdf'; // Adjust the path as necessary

const Resume = () => {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h2>My Resume</h2>
      <p>You can view or download my resume using the button below.</p>
      <a
        href="/SR_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007BFF',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          display: 'inline-block',
          marginTop: '1rem'
        }}
      >
        View / Download Resume
      </a>
    </div>
  );
};

export default Resume;
