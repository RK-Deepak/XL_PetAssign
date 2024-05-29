import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        
        <svg width="64.81" height="67.16" viewBox="0 0 146 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71.4031 76.1815C62.7381 83.2042 66.8055 93.2959 64.3357 107.371C60.9372 127.856 70.3169 136.472 79.0245 133.12C87.7322 129.768 87.6725 116.548 95.9786 111.012C103.778 105.01 116.114 109.077 121.669 101.467C127.477 94.0903 122.321 82.0913 102.286 79.124C88.9407 77.3084 80.6121 70.1125 71.4031 76.1815Z" fill="#FFE55E"/>
<path d="M42.7035 85.2519C52.9902 89.5132 60.0423 98.1517 58.4875 104.504C56.7266 111.1 46.9933 112.966 36.7066 108.705C26.4199 104.443 19.3679 95.8049 20.9227 89.4524C22.6836 82.857 32.4168 80.9906 42.7035 85.2519Z" fill="#FFAA00"/>
<path d="M87.2446 52.5987C87.4325 63.6279 93.1155 72.4666 99.7518 72.6813C106.388 72.8961 111.837 64.3306 111.65 53.3014C111.462 42.2722 105.779 33.4335 99.1424 33.2187C92.2904 33.2582 86.841 41.8238 87.2446 52.5987Z" fill="#FFAA00"/>
<path d="M50.7927 52.7878C59.4158 61.1571 62.3101 72.3471 57.5457 77.4008C52.7813 82.4544 41.8571 79.6051 33.234 71.2358C24.6109 62.8665 21.7166 51.6764 26.481 46.6227C31.2454 41.5691 42.1696 44.4185 50.7927 52.7878Z" fill="#FFAA00"/>
<path d="M55.3427 48.9723C60.2213 59.1344 69.0592 64.63 74.9768 61.7619C81.1028 58.6483 82.1153 48.2158 77.4815 38.2785C72.603 28.1163 63.765 22.6208 57.8474 25.4888C51.6851 28.1321 50.4642 38.8101 55.3427 48.9723Z" fill="#FFAA00"/>
</svg>

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