import React, { useState, useEffect } from 'react';
import { getAllQuizzes } from '../api/quizzes'; // Import the function to fetch quizzes
import { Link } from 'react-router-dom';

const Tests = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzesData = async () => {
      try {
        const quizzesData = await getAllQuizzes(); // Fetch quizzes data from backend
        setQuizzes(quizzesData); // Set the fetched quizzes to state
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzesData();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4"> {/* Added px-4 for padding on small screens */}
  <h1 className="text-3xl font-semibold mb-8">Tests</h1>
  
  {/* Quizzes Section */}
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4">All Quizzes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {quizzes.map(quiz => (
        <div key={quiz.id} className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">{quiz.title}</h3>
          <p className="text-gray-600">Description: {quiz.description}</p>
          <Link to={`/test/${quiz.id}`} className="text-blue-500 hover:underline">Start Quiz</Link>
        </div>
      ))}
    </div>
  </section>
</div>

  );
};

export default Tests;
