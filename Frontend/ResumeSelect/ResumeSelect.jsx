import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ResumeSelect.css'; 
import { FaFilePdf,FaRegFilePdf } from "react-icons/fa"

const ResumeSelect = () => {
  const navigate = useNavigate();

  const handleFirstClick = () => {
    navigate('/generatemail'); // Redirect to the generateMail route 
  };

  const handleSecondClick = () => {
    navigate('/generateResume'); // Redirect to the generateResume route
  };

  const handlePrevClick = () => {
    navigate('/'); // Redirect to the home page route
  };

  return (
    <>
      <Navbar /> 

      <div className='main'>
        <li href="" onClick={handleFirstClick}>
          <div className='first'>
            <div>
              <span className='pdf-1' >
              <FaFilePdf/>  
              </span>
            
            <p>We'll re-format it and fill in your information so you don't have to.</p>
            </div>
          </div>
        </li>

        <li onClick={handleSecondClick}> 
          <div className="second">
            <div>
              <span className='pdf-2'>
                <FaRegFilePdf/>

              </span> 
            <h2>Create a new resume</h2>
            <p>We will help you create a resume step by step</p>
            </div>
          </div>
        </li>
      </div>

      <button className='next'>
        <span>Next</span>
      </button>

      <button className='prev' onClick={handlePrevClick}>
        <span>Go Back</span>
      </button>
    </>
  );
};

export default ResumeSelect;
