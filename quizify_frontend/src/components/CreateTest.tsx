import React, { useState } from 'react';

const CreateTest = () => {
    const [quiz, setQuiz] = useState("");
    const [description, setDescription] = useState("");
    const [starttime, setStarttime] = useState("");
    const [endtime, setEndtime] = useState("");
    const [questions, setQuestions] = useState([{ question: "", type: "text", answers: [""] }]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: "", type: "text", answers: [""] }]);
    };

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].question = value;
        setQuestions(newQuestions);
    };

    const handleTypeChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].type = value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (questionIndex, answerIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers[answerIndex] = value;
        setQuestions(newQuestions);
    };

    const handleAddAnswer = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers.push("");
        setQuestions(newQuestions);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Handle form submission
        } catch (error) {
            console.error('Quiz creation failed:', error);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center flex-col ">
                <h2 className="text-2xl font-semibold mb-4">Create Test</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="quiz" className="block mb-1">Quiz Name</label>
                        <input
                            type="text"
                            id="quiz"
                            value={quiz}
                            onChange={(e) => setQuiz(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-1">Description</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="starttime" className="block mb-1">Start Time</label>
                        <input
                            type="datetime-local"
                            id="starttime"
                            value={starttime}
                            onChange={(e) => setStarttime(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="endtime" className="block mb-1">End Time</label>
                        <input
                            type="datetime-local"
                            id="endtime"
                            value={endtime}
                            onChange={(e) => setEndtime(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    {questions.map((question, index) => (
                        <div key={index}>
                            <label htmlFor={`question-${index}`} className="block mb-1">Question {index + 1}</label>
                            <input
                                type="text"
                                id={`question-${index}`}
                                value={question.question}
                                onChange={(e) => handleQuestionChange(index, e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
                                required
                            />
                            <select
                                value={question.type}
                                onChange={(e) => handleTypeChange(index, e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
                            >
                                <option value="integer">Integer</option>
                                <option value="singlechoice">Single Choice</option>
                                {/* Add more question types as needed */}
                            </select>
                            {question.type === "integer" && (
                                <div>
                                    {question.answers.map((answer, answerIndex) => (
                                        <div key={answerIndex}>
                                            <input
                                                type="number"
                                                value={answer}
                                                onChange={(e) => handleAnswerChange(index, answerIndex, e.target.value)}
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
                                                required
                                            />
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => handleAddAnswer(index)}>Add Answer</button>
                                </div>
                            )}
                            {question.type === "singlechoice" && (
                                <div>
                                    {question.answers.map((answer, answerIndex) => (
                                        <div key={answerIndex}>
                                            <input
                                                type="text"
                                                value={answer}
                                                onChange={(e) => handleAnswerChange(index, answerIndex, e.target.value)}
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
                                                required
                                            />
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => handleAddAnswer(index)}>Add Answer</button>
                                </div>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={handleAddQuestion} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Add Question
                    </button>
                    <br></br>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Create Quiz
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTest;
