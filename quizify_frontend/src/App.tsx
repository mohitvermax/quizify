import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Tests from './components/Tests';
import TestDetail from './components/TestDetail';
import TestSolutions from './components/TestSolutions';
import TestInfo from './components/TestInfo';
import CreateTest from './components/CreateTest';

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
              <Route path="test/:id/solutions" element={<TestSolutions />} />
              <Route path="test/:id/info" element={<TestInfo/>} />
              <Route path="create-test" element={<CreateTest/>} />

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
