import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/jokes') 
      .then((res) => {
        setJokes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>List of Jokes</h1>
      <p>Total Jokes: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </>
  );
}

export default App;
