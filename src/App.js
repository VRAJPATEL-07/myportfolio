import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutMe from './About_me';
import Main from './Main';
import Skills from './Skills';
import WhyHireMe from './WhyHireMe';
import Projects from './projects';
import ContactForm from './ContactForm';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-wave">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Main />
          <AboutMe />
          <WhyHireMe />
          <Skills />
          <Projects />
          <ContactForm />
        </div>
      )}
    </div>
  );
}

export default App;
