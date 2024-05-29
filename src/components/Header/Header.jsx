import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import paw from "../../assets/paw.png"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        
   <img src={paw} alt='' style={{width:"40px"}}/>

        <span className='logo-text'><span className='inner-logo-text'>G</span>local</span>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/category">Categories</Link></li>
          <li><Link to="#">About Us</Link></li>
          <li><Link to="#">Products</Link></li>
          <li><Link to="#">Pet Care</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button id='btn1'>Sign In</button>
        <button id='btn2'>Register</button>
      </div>
    </header>
  );
}

export default Header;
