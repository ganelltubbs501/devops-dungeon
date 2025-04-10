const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simulate build status
let buildStatus = 'idle';

app.get('/api/build-status', (req, res) => {
  res.json({ status: buildStatus });
});

// Simulate triggering a build
app.post('/api/trigger-build', (req, res) => {
  buildStatus = 'building';
  setTimeout(() => {
    buildStatus = Math.random() > 0.3 ? 'success' : 'fail';
  }, 5000); // simulate build time
  res.json({ message: 'Build triggered' });
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});
