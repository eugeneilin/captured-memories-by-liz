import React from 'react';
import AdminAsideNav from '../../components/adminAsideNav/AdminAsideNav';
import AdminTopNav from '../../components/adminTopNav/AdminTopNav';
import './admin.css';

const Admin = () => {
  return (
    <div class='admin-page'>
      <AdminTopNav />
      <div>
        <AdminAsideNav />
        <main>Main Window</main>
      </div>
    </div>
  );
};

export default Admin;
