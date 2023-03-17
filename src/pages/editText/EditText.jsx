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
          <div className='admin-card'>asdfasdf</div>
        </main>
      </div>
    </div>
  );
};

export default EditText;
