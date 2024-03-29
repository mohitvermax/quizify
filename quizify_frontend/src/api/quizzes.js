import axios from 'axios';

// Base URL for the backend API
const BASE_URL = 'http://127.0.0.1:8000/';

// Function to fetch all quizzes from the backend
export const getAllQuizzes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}quizzes/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw error;
  }
};

// Function to fetch a single quiz by its ID from the backend
export const getQuizById = async (quizId) => {
    try {
      const response = await axios.get(`${BASE_URL}quizzes/${quizId}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching quiz with ID ${quizId}:`, error);
      throw error;
    }
  };




