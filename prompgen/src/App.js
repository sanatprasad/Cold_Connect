import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login/Login.jsx"
import Signup from "./Components/Signup/Signup.jsx"
import Home from "./Components/Home/Home.jsx"
import GenerateMail from './Components/GenerateMail/GenerateMail.jsx';
import GenerateResume from './Components/GenerateResume/GenerateResume.jsx';
import ResumeSelect from './Components/ResumeSelect/ResumeSelect.jsx';
import Testing from './Components/Testing/Testing.jsx';


const App = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login/>  }/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/generatemail' element={ <GenerateMail/> }></Route>
        <Route path='/generateResume' element={ <GenerateResume/> }></Route>
        <Route path='/resumeselect' element={ <ResumeSelect/> } />
        <Route path="/Testing" element={ <Testing/> } />
        
        
        
      </Routes>
  </BrowserRouter>

    </div>
  )
}

export default App