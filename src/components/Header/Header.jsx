import React from 'react';
import "./Header.css"
import { Link, NavLink } from 'react-router-dom';
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
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/category" activeClassName="active">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/pet-care" activeClassName="active">Pet Care</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
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
