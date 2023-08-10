import React from 'react';
import './Navbar.css';

const Navbar = () => {
  // Function demonstrating the Href Method
  const fn1 = () => {
    window.location.href = "http://localhost:3003/signup";
  };

  const fn2 = () => { 
    window.location.href ="http://localhost:3003/login"; 
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-brand"> <img src="coldconnect logo.jpeg" alt="" />  </div>
      
      <ul className="navbar-links">
        {/* <li>How It Works</li> */}
        
      </ul>
      <div className="navbar-buttons">
        <button className="btn-signup" onClick={fn1}>Sign Up</button>
        <button className="btn-login" onClick={fn2}>Login</button>
      </div>
    </nav>
  );

};



export default Navbar;
