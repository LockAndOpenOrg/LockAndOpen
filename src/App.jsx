import React from 'react';
import '../src/styles/globals.css'
import headerLogo from '../src/assets/1-removebg-preview.png';
import heroLogo from '../src/assets/lao.png';

const App = () => {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="logo-container" id="home">
          <img src={headerLogo} alt="Picstream Logo" className="header-logo" />
        </div>
        <div className="logo-text">LockAndOpen</div>
      </header>
      <section className="hero-section" id="hero">
        <img src={heroLogo} alt="Picstream Logo" className="hero-section-logo" />
        <p className="hero-text">We're currently working on the progress...</p>
        <a href="https://picstream.lockandopen.in/" className="hero-button">Click here to visit the Picstream application page</a>
      </section>
    </>
  );
};

export default App;
