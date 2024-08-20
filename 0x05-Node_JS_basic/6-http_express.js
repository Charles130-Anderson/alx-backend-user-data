const express = require('express');
// Import express module for server

const app = express();
// Initialize express application
const port = 1245;
// Define port number for server

app.get('/', (req, res) => {
// Handle GET request to root
  res.statusCode = 200;
// Set response status code to 200
  res.setHeader('Content-Type', 'text/plain');
// Set content type to plain text
  res.send('Hello Holberton School!');
// Respond with 'Hello Holberton School!'
});

app.listen(port);
// Start server on specified port

module.exports = app;
// Export the app for reuse
