import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById } from '../api/quizzes'; // Function to fetch quiz by ID

const TestDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState();
  const [answers, setAnswers] = useState({}); // State to hold user answers
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState(null);

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
    
    // Initialize an object to store the results
    const results = {};
    
    // Iterate through each question
    quiz.questions.forEach(question => {
      // Get the correct answer for the question
      const correctAnswer = question.answers.find(answer => answer.is_correct);
      
      // Get the submitted answer for the question
      const submittedAnswerId = answers[question.id];
      
      // Check if the submitted answer matches the correct answer
      const isCorrect = String(correctAnswer.id) === submittedAnswerId;
      
 
      results[question.id] = {
        isCorrect,
        correctAnswer: correctAnswer.text,
        submittedAnswer: question.answers.find(answer => String(answer.id) === submittedAnswerId)?.text || 'No answer provided',
      };
    });
    setSubmitted(true);
    setResults(results);
    
 
    console.log('Results:', results);
  };
  

  return (
    <div className="container mx-auto py-8 px-4">
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
      {submitted && results && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <ul className="space-y-4">
            {quiz.questions.map(question => (
              <li key={question.id} className="flex justify-between">
                <p>{question.text}</p>
                <p className={results[question.id].isCorrect ? 'text-green-600' : 'text-red-600'}>
                  {results[question.id].isCorrect ? 'Correct' : 'Incorrect'}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestDetail;
