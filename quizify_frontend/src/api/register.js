// api/register.js

import axios from 'axios';

const register = async (username, email, password) => {
  try {
    const response = await axios.post('http://localhost:8000/api/register/', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default register;
