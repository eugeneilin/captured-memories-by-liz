import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Liz from './pages/liz/Liz';
import Portfolio from './pages/portfolio/Portfolio';
import Investment from './pages/investment/Investment';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import AdminDashboard from './pages/admin/adminDashboard/AdminDashboard';
import Images from './pages/admin/images/Images.jsx';
import TextFields from './pages/admin/textFields/TextFields.jsx';
import Links from './pages/admin/links/Links';
import { AuthContext } from './context/AuthContext';
import './App.css';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='liz' element={<Liz />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='investment' element={<Investment />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />{' '}
            <Route
              path='admin'
              element={
                <RequireAuth>
                  <AdminDashboard />
                </RequireAuth>
              }
            />
          </Route>
          <Route path='admin'>
            <Route
              path='/admin/images'
              element={
                <RequireAuth>
                  <Images />
                </RequireAuth>
              }
            />
            <Route
              path='/admin/text-fields'
              element={
                <RequireAuth>
                  <TextFields />
                </RequireAuth>
              }
            />
            <Route
              path='/admin/links'
              element={
                <RequireAuth>
                  <Links />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
