import { Link } from "react-router-dom";


const Tests = () => {
 


  // Mock data for upcoming tests and taken tests (replace with actual data from your backend)
  const upcomingTests = [
    { id: 1, title: 'Upcoming Test 1', date: '2024-04-10', level: 'Intermediate' },
    { id: 2, title: 'Upcoming Test 2', date: '2024-04-15', level: 'Easy' },
  ];

  const takenTests = [
    { id: 1, title: 'Test 1', score: 80, level: 'Intermediate' },
    { id: 2, title: 'Test 2', score: 90,level: 'Intermediate' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8">Tests</h1>
      
      {/* Upcoming Tests Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingTests.map(test => (
            
            <div key={test.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{test.title}</h3>
              <p className="text-gray-600">Date: {test.date}</p>
              <p className="text-gray-600">Level: {test.level}</p>
              <Link to={`/test/${test.id}`} className="text-blue-500 hover:underline">View Test</Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* Taken Tests Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Taken Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {takenTests.map(test => (
            <div key={test.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{test.title}</h3>
              <p className="text-gray-600">Score: {test.score}</p>
              <p className="text-gray-600">Level: {test.level}</p>
              <Link to={`/test/${test.id}`} className="text-blue-500 hover:underline">View Test</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tests;