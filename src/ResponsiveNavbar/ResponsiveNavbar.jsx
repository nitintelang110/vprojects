import React from 'react';
import './ResponsiveNavbar.css';

const ResponsiveNavbar = () => {
  return (
    <div className="nr_container">
    
    <header className="headerr">
    <a href="#" className="logo">Logo</a>

    <input type="checkbox" id="check"/>
    <label for="check" className="icons">
       <i className="bx bx-menu" id="menu-icon"></i> 
       <i className="bx bx-x" id="close-icon"></i>
    </label>

    <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
</header>


    </div>
  )
}

export default ResponsiveNavbar;