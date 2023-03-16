import React from 'react';
import AdminAsideNav from '../../components/admin/adminAsideNav/AdminAsideNav';
import AdminTopNav from '../../components/admin/adminTopNav/AdminTopNav';
import './editText.css';

const EditText = () => {
  return (
    <div className='admin-page'>
      <AdminTopNav />
      <div>
        <AdminAsideNav />
        <main>
          <div className='main-window-sidebar'>
            <ul>
              <li>asdfasdf</li>
            </ul>
            <ul>
              <li>asdfasdf</li>
            </ul>
            <ul>
              <li>asdfasdf</li>
            </ul>
            <ul>
              <li>asdfasdf</li>
            </ul>
            <ul>
              <li>asdfasdf</li>
            </ul>
          </div>
          <div className='main-window'>Edit Text Here</div>
        </main>
      </div>
    </div>
  );
};

export default EditText;
