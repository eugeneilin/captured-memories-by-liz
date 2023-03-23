import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import AdminAsideNav from '../../components/admin/adminAsideNav/AdminAsideNav';
import AdminTopNav from '../../components/admin/adminTopNav/AdminTopNav';
import './textFields.css';

const TextFields = () => {
  const [textFieldsList, setTextFieldsList] = useState([]);

  const textFieldsCollectionRef = collection(db, 'textFields');

  // OLD CODE
  // const getTextFields = async () => {
  //   try {
  //     const data = await getDocs(textFieldsCollectionRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setTextFieldsList(filteredData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getTextFields();
  //   // eslint-disable-next-line
  // }, []);

  const getTextFields = async () => {
    try {
      const data = await getDocs(textFieldsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return filteredData;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setTextFieldsList(getTextFields);
    // eslint-disable-next-line
  }, [textFieldsList]);

  console.log(textFieldsList);

  return (
    <div className='admin-page'>
      <AdminTopNav />
      <div>
        <AdminAsideNav />
        <main>
          <div className='admin-card'>
            <h3>Home</h3>
            <ul>
              {textFieldsList.map((textField) => (
                <li>{textField.content}</li>
              ))}
            </ul>
          </div>
          <div className='admin-card'>
            <h3>Liz</h3>
            <ul>
              {textFieldsList.map((textField) => (
                <li>{textField.content}</li>
              ))}
            </ul>
          </div>
          <div className='admin-card'>
            <h3>Portfolio</h3>
            <ul>
              {textFieldsList.map((textField) => (
                <li>{textField.content}</li>
              ))}
            </ul>
          </div>
          <div className='admin-card'>
            <h3>Investment</h3>
            <ul>
              {textFieldsList.map((textField) => (
                <li>{textField.content}</li>
              ))}
            </ul>
          </div>
          <div className='admin-card'>
            <h3>Contact</h3>
            <ul>
              {textFieldsList.map((textField) => (
                <li>{textField.content}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TextFields;
