import React from 'react';
 
import './App.css';
import Navbar from './components/navbar/Navbar';
import Course from './components/body/Course';

function App() {
  return (
    <div className="container" style={{backgroundColor:"#F5F5F5"}}>
      
      
     <Navbar></Navbar>
      <Course></Course>
     
    </div>
    
  );
}

export default App;
