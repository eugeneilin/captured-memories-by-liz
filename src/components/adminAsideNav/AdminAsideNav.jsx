import React from 'react';
import './adminAsideNav.css';

const AdminAsideNav = () => {
  return (
    <aside>
      <h5>Main</h5>
      <div className='admin-links'>
        <a href='/admin'>
          <i class='fa-solid fa-house'></i>
          Dashboard
        </a>
        <a href='/'>
          <i class='fa-solid fa-globe'></i>
          View Website
        </a>
      </div>
      <h5>Website</h5>
      <div className='admin-links'>
        <a href='#'>
          <i class='fa-solid fa-images'></i>
          Galleries
        </a>
        <a href='#'>
          <i class='fa-regular fa-image'></i>
          Other Images
        </a>
        <a href='#'>
          <i class='fa-solid fa-file-lines'></i>
          Text
        </a>
      </div>
      <h5>Clients</h5>
      <div className='admin-links'>
        <a href='#'>
          <i class='fa-solid fa-link'></i>
          Links
        </a>
        <a href='#'>
          <i class='fa-solid fa-handshake'></i>
          Something
        </a>
      </div>
      <h5>Another Header</h5>
      <div className='admin-links'>
        <a href='#'>
          <i class='fa-solid fa-hand-peace'></i>
          More Options
        </a>
        <a href='#'>
          <i class='fa-solid fa-thumbs-up'></i>
          And Some More
        </a>
      </div>
      <h5>Testing Scene</h5>
      <div className='admin-links'>
        <a href='/admin/add-doc'>
          <i class='fa-solid fa-file-circle-plus'></i>
          Add Document
        </a>
        <a href='#'>
          <i class='fa-solid fa-code'></i>
          Placeholder
        </a>
      </div>
      <h5>User</h5>
      <div className='admin-links'>
        <a href='#'>
          <i class='fa-solid fa-arrow-right-from-bracket'></i>
          Log Out
        </a>
      </div>
    </aside>
  );
};

export default AdminAsideNav;
