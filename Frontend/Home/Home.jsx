import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import { Link } from 'react-router-dom';
import './Home.css';
import mainbg from './main_bg.png';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${mainbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="home-container" style={backgroundStyle}>
      <Navbar />
      <button className="started" >
        <Link to="/resumeselect">Get started</Link>
      </button>
    </div>
  );
};

export default Home;