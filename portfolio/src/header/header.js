import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      background: '#333',
      color: '#fff',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    };
  
    const logoStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#fff',
    };
  
    const linkStyle = {
      textDecoration: 'none',
      color: '#fff',
      marginLeft: '20px',
      fontSize: '16px',
      transition: 'color 0.3s ease-in-out',
    };
  
    return (
      <header style={navStyle}>
        <div>
          <Link to="/" style={logoStyle}>
            My Portfolio
          </Link>
        </div>
        <nav>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
          <Link to="/resume" style={linkStyle}>
            Resume
          </Link>
          <Link to="/about" style={linkStyle}>
            About Me
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact Me
          </Link>
        </nav>
      </header>
    );
  }
  
  export default Header;
  