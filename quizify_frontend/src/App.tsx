import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Tests from './components/Tests';
import TestDetail from './components/TestDetail';

const App = () => {
  const token = localStorage.getItem('authToken');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {token ? (
            <>
              <Route path="tests" element={<Tests />} />
              <Route path="test/:id" element={<TestDetail />} />
            </>
          ) : (
            <>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              
            </>
          )}
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
