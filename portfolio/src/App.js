import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Projects from './projects/projects';
import Resume from './resume/resume';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';

const App = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  };

  return (
    <Router>
      <div style={containerStyle}>
      <Header />
      <Routes>
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={ContactMe} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
