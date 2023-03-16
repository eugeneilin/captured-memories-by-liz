import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.js';
import AdminTopNav from '../../components/adminTopNav/AdminTopNav';
import AdminAsideNav from '../../components/adminAsideNav/AdminAsideNav';

const AddDoc = () => {
  return (
    <div class='admin-page'>
      <AdminTopNav />
      <div>
        <AdminAsideNav />
        <main>
          <form>
            <input type='text' placeholder='add doc' />
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddDoc;
