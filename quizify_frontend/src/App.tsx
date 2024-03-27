import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './Layout';
import About from './components/About';
import Tests from './components/Tests';
import TestDetail from './components/TestDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="tests" element={<Tests />} />
          <Route path="test/:id" element={<TestDetail />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
