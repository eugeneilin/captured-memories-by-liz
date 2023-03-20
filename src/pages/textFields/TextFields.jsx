import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import AdminAsideNav from '../../components/admin/adminAsideNav/AdminAsideNav';
import AdminTopNav from '../../components/admin/adminTopNav/AdminTopNav';
import './textFields.css';

const TextFields = () => {
  const [textFieldsList, setTextFieldsList] = useState([]);

  const textFieldsCollectionRef = collection(db, 'textFields');

  const getTextFields = async () => {
    try {
      const data = await getDocs(textFieldsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }));
      setTextFieldsList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTextFields();
    console.log(textFieldsList[0]);
  }, []);

  return (
    <div className='admin-page'>
      <AdminTopNav />
      <div>
        <AdminAsideNav />
        <main>
          <div className='admin-card'>
            <table>
              <thead>
                <tr>
                  <th>Text ID</th>
                  <th>Preview</th>
                  <th>Page</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                {textFieldsList.map((textField) => (
                  <tr>
                    <td>{textField.id}</td>
                    <td>{textField.content}</td>
                    <td>{textField.page}</td>
                    {/* <td>{textField.updated}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TextFields;
