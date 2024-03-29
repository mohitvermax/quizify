import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById } from '../api/quizzes'; // Function to fetch quiz by ID

const TestDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState();
  const [answers, setAnswers] = useState({}); // State to hold user answers

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

  const handleAnswerChange = (questionId, answerId) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission, e.g., submit answers to backend
    console.log('Submitted answers:', answers);
  };

  return (
    <div className="container mx-auto py-8">
      {quiz ? (
        <div>
          <h1 className="text-3xl font-semibold mb-4">{quiz.title}</h1>
          <p className="text-gray-600 mb-4">Description: {quiz.description}</p>
          <form onSubmit={handleSubmit}>
            {quiz.questions.map(question => (
              <div key={question.id} className="mb-4">
                <h2 className="text-lg font-semibold mb-2">{question.text}</h2>
                <ul className="space-y-2">
                  {question.answers.map(answer => (
                    <li key={answer.id}>
                      <input
                        type="radio"
                        id={`answer-${answer.id}`}
                        name={`question-${question.id}`}
                        value={answer.id}
                        checked={answers[question.id] === String(answer.id)}
                        onChange={() => handleAnswerChange(question.id, String(answer.id))}
                      />
                      <label htmlFor={`answer-${answer.id}`} className="ml-2">{answer.text}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Submit Answers
            </button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TestDetail;
