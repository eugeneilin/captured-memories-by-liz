import React from 'react';
import { Link } from 'react-router-dom';
import './adminAsideNav.css';

const AdminAsideNav = () => {
  return (
    <aside>
      <h5>Main</h5>
      <div className='admin-links'>
        <Link to='/admin'>
          <i className='fa-solid fa-house'></i>
          Dashboard
        </Link>
        <Link to='/'>
          <i className='fa-solid fa-globe'></i>
          View Website
        </Link>
      </div>
      <h5>Website</h5>
      <div className='admin-links'>
        <Link to='/admin/text-fields'>
          <i className='fa-solid fa-file-lines'></i>
          Edit Text
        </Link>
        <Link to='/admin/images'>
          <i className='fa-regular fa-image'></i>
          Images
        </Link>
      </div>
      <h5>Clients</h5>
      <div className='admin-links'>
        <Link to='/admin/links'>
          <i className='fa-solid fa-link'></i>
          Links
        </Link>
      </div>

      <h5>User</h5>
      <div className='admin-links'>
        <Link to='#'>
          <i className='fa-solid fa-arrow-right-from-bracket'></i>
          Log Out
        </Link>
      </div>
    </aside>
  );
};

export default AdminAsideNav;
