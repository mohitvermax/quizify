
import axios from 'axios';

const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login/', {
      username,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export default login;
