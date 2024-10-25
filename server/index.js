// Import Express
const express = require('express');
const cors = require('cors'); // Import CORS

// Create an Express app
const app = express();

// Enable CORS to allow requests from different origins
app.use(cors());

// Set port
const port = 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, setup: 'Why did the tomato turn red?', punchline: 'Because it saw the salad dressing!' },
    { id: 2, setup: 'Why did the chicken cross the playground?', punchline: 'To get to the other slide!' },
    { id: 3, setup: 'What do you call a fake noodle?', punchline: 'An impasta!' },
    { id: 4, setup: 'Why did the coffee file a police report?', punchline: 'It got mugged!' },
    { id: 5, setup: 'How does a non-binary samurai kill people?', punchline: 'They/Them.' }
  ];
  res.send(jokes);
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
