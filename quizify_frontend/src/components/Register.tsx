
import { useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../api/register';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(username, email, password);
      history.push('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto flex items-center justify-center flex-col h-[70vh]">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
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
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Register
        </button>
        <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </p>
      </form>
    </div>
  );
};

export default Register;
