import React from 'react';
import AdminAsideNav from '../../../components/admin/adminAsideNav/AdminAsideNav';
import AdminTopNav from '../../../components/admin/adminTopNav/AdminTopNav';
import './adminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className='admin-page'>
      <AdminTopNav />
      <div>
        <AdminAsideNav />
        <main>Main Window</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
