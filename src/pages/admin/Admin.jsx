import React from 'react';
import './admin.css';

const Admin = () => {
  return (
    <div id='admin-page'>
      <h4>Admin Panel</h4>
      <div>
        <aside>
          <h5>Website</h5>
          <div className='admin-links'>
            <a href='#'>Galleries</a>
            <a href='#'>Scattered Images</a>
            <a href='#'>Text</a>
          </div>
          <h5>Clients</h5>
          <div className='admin-links'>
            <a href='#'>Links</a>
            <a href='#'>Something</a>
          </div>
          <h5>Another Header</h5>
          <div className='admin-links'>
            <a href='#'>More Options</a>
            <a href='#'>And Some More</a>
          </div>
        </aside>
        <main>Main Window</main>
      </div>
    </div>
  );
};

export default Admin;
