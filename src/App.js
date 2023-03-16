import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Liz from './pages/liz/Liz';
import Portfolio from './pages/portfolio/Portfolio';
import Investment from './pages/investment/Investment';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import { AuthContext } from './context/AuthContext';
import './App.css';
import { useContext } from 'react';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };

  console.log(currentUser);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/liz' element={<Liz />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/investment' element={<Investment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/admin'
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
