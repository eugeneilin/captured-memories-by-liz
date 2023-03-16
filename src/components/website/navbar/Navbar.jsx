import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='container'>
      <h1>
        <Link to='/'>Captured Memories by Liz</Link>
      </h1>
      <h5>Portraits, Engagements, Couples, Family Photographer</h5>
      <h5>Serving Charlotte, North Carolina</h5>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/liz'>Liz</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/investment'>Investment</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
