import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-[90vh]">
      <div className="w-full md:flex">
        <div className="md:w-1/2 m-auto pt-8">
          <img
            className="w-full h-auto md:h-full"
            src="https://cdni.iconscout.com/illustration/premium/thumb/man-participating-in-a-quiz-competition-7365569-6035425.png?f=webp"
            alt=""
          />
        </div>
        <div className="md:w-1/2 h-auto m-auto p-6 bg-slate-300 rounded-lg shadow-md">
          <h1 className="text-5xl font-semibold text-center mb-6">Welcome to Quizify</h1>
          <p className="text-lg text-gray-700 mb-8">
            Are you ready to test your knowledge and challenge yourself? Quizify is the ultimate destination for fun and
            engaging quizzes on a wide range of topics. Whether you're a trivia master or just looking to learn
            something new, Quizify has something for everyone.
          </p>
          <div className="flex justify-center">
            <Link to="/tests" className="bg-slate-800 hover:bg-black text-white px-6 py-2 rounded-md text-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
