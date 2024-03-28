
import { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../api/login';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(username, password);
      localStorage.setItem('authToken', token);
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto flex items-center justify-center flex-col h-[70vh]">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  rounded-md">
          Login
        </button>
        <p className="mt-4">
        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
      </p>
      </form>
    </div>
  );
};

export default Login;
