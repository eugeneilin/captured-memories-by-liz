import React from 'react';
import '../../App.css';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='container'>
      <h1>
        <a href='/'>Captured Memories by Liz</a>
      </h1>
      <h5>Portraits, Engagements, Couples, Family Photographer</h5>
      <h5>Serving Charlotte, North Carolina</h5>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/liz'>Liz</a>
        </li>
        <li>
          <a href='/portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='/investment'>Investment</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
