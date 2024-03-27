
import { useParams } from 'react-router-dom';

const TestDetail = () => {


  // Get test ID from URL params
  const { id } = useParams();

  // Mock data for the test details (replace with actual data from your backend)
  const test = {
    id: 1,
    topic: 'Test Topic 1',
    date: '2024-04-10',
    level: 'Intermediate',
    description: 'This is a sample test description.',
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8">{test.topic}</h1>
      <p className="text-gray-600">Date: {test.date}</p>
      <p className="text-gray-600">Level: {test.level}</p>
      <p className="text-gray-600">{test.description}</p>
    </div>
  );
};

export default TestDetail;
