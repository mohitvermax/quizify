import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById } from '../api/quizzes'; // Function to fetch quiz by ID

const TestInfo = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const quizData = await getQuizById(id);
        setQuiz(quizData);
        // Initialize answers state with empty values for each question
        const initialAnswers = {};
        quizData.questions.forEach(question => {
          initialAnswers[question.id] = '';
        });
        setAnswers(initialAnswers);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuizData();
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      {quiz ? (
        <div>
          <h1 className="text-3xl font-semibold mb-4">{quiz.title}</h1>
          <p className="text-gray-600 mb-4">Description: {quiz.description}</p>
          <h1 className="text-gray-600 mb-4">Author: {quiz.created_by}</h1>
          <h1 className="text-gray-600 mb-4">Start Time: {quiz.startTime}</h1>
          <h1 className="text-gray-600 mb-4">End Time: {quiz.endTime}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TestInfo;
