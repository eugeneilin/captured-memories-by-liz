import React from 'react';
import { Link } from 'react-router-dom';
import './adminAsideNav.css';

const AdminAsideNav = () => {
  return (
    <aside>
      <h5>Main</h5>
      <div className='admin-links'>
        <Link to='/admin'>
          <i class='fa-solid fa-house'></i>
          Dashboard
        </Link>
        <Link to='/'>
          <i class='fa-solid fa-globe'></i>
          View Website
        </Link>
      </div>
      <h5>Website</h5>
      <div className='admin-links'>
        <Link to='/admin/text'>
          <i class='fa-solid fa-file-lines'></i>
          Text
        </Link>
        <Link to='#'>
          <i class='fa-solid fa-images'></i>
          Galleries
        </Link>
        <Link to='#'>
          <i class='fa-regular fa-image'></i>
          Other Images
        </Link>
      </div>
      <h5>Clients</h5>
      <div className='admin-links'>
        <Link to='#'>
          <i class='fa-solid fa-link'></i>
          Links
        </Link>
        <Link to='#'>
          <i class='fa-solid fa-handshake'></i>
          Something
        </Link>
      </div>
      <h5>Another Header</h5>
      <div className='admin-links'>
        <Link to='#'>
          <i class='fa-solid fa-hand-peace'></i>
          More Options
        </Link>
        <Link to='#'>
          <i class='fa-solid fa-thumbs-up'></i>
          And Some More
        </Link>
      </div>
      <h5>Testing Zone</h5>
      <div className='admin-links'>
        <Link to='#'>
          <i class='fa-solid fa-file-circle-plus'></i>
          Add Document
        </Link>
        <Link to='#'>
          <i class='fa-solid fa-code'></i>
          Placeholder
        </Link>
      </div>
      <h5>User</h5>
      <div className='admin-links'>
        <Link to='#'>
          <i class='fa-solid fa-arrow-right-from-bracket'></i>
          Log Out
        </Link>
      </div>
    </aside>
  );
};

export default AdminAsideNav;
