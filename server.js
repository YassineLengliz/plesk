
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Test API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express running on Plesk!' });
});

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});
