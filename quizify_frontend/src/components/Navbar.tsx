import React, { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    setIsLoggedIn(!!authToken);
  }, []); // Run once when the component mounts

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    // console.log("idhar...")
    setIsLoggedIn(!!authToken);
  }, [isLoggedIn]); // Re-run when isLoggedIn state changes

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('access');
    setIsLoggedIn(false);
    navigate("/login")
    location.reload()
    // Perform any additional logout logic here
  };

  return (
    <nav className="flex flex-wrap items-center justify-between w-full h-16 md:h-20 lg:h-24 px-8 bg-slate-800 text-white">
      <div className="flex items-center">
        <Link to="/" className="text-3xl font-semibold">Quizify</Link>
      </div>
      <div className="hidden lg:flex flex-grow justify-center">
        <Link to="/" className="mx-4">Home</Link>
        <Link to="/about" className="mx-4">About Us</Link>
        {
          isLoggedIn && 
          (
            <Link to="/tests" className="mx-4">Tests</Link>
          )
        }
        {
          localStorage.getItem('access') === 'admin' && (
            <Link to="/create-test" className="mx-4">Create Tests</Link>
          )
        }
      </div>
      <div className="flex justify-center">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="mx-4">Logout</button>
        ) : (
          <>
            <Link to="/login" className="mx-4">Login</Link>
            <Link to="/register" className="mx-4">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
