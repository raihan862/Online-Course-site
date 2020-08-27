import React from 'react';
import logo from '../../logo.jpg'
const Navbar = () => {
    let btnStyle={
        position:"absolute",
        right:"100px",
        padding: "10px 15px",
        borderRadius: "15px",
        cursor: "pointer",
        width:"100px"
    
    }
    return (
        <nav className="navbar navbar-expand-lg    navbar-light bg-light">
        <a className="navbar-brand" href="#"> <img className="w-50" src= {logo} alt="Logo"/> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Courses</a>
            <a className="nav-item nav-link" href="#">About Us</a>
            
           
          </div>
        </div>
        <button className="btn btn-primary " style ={btnStyle}>SignUp</button>
      </nav>
    );
};

export default Navbar;