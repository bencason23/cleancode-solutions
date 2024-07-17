import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
    <header className="header">
      <h1>E-LIBRARY MANAGEMENT</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
