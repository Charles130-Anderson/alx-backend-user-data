const http = require('http');
// Import HTTP module for server
const { readFile } = require('fs');
// Import readFile from file system

const hostname = '127.0.0.1';
// Define hostname for server
const port = 1245;
// Define port number for server

function countStudents(fileName) {
  // Function to count students
  const students = {};
  // Object to store student data
  const fields = {};
  // Object to store field data
  let length = 0;
  // Variable to track total students
  return new Promise((resolve, reject) => {
    // Return promise for asynchronous operation
    readFile(fileName, (err, data) => {
      // Read file asynchronously
      if (err) {
        reject(err);
        // Reject if an error occurs
      } else {
        let output = '';
        // Initialize output string
        const lines = data.toString().split('\n');
        // Split data into lines
        for (let i = 0; i < lines.length; i += 1) {
          // Iterate through each line
          if (lines[i]) {
            length += 1;
            // Increment student count
            const field = lines[i].toString().split(',');
            // Split line into fields
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              // Check if field exists in students
              students[field[3]].push(field[0]);
              // Add student to existing field
            } else {
              students[field[3]] = [field[0]];
              // Create new field with student
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              // Check if field exists in fields
              fields[field[3]] += 1;
              // Increment student count for field
            } else {
              fields[field[3]] = 1;
              // Initialize student count for field
            }
          }
        }
        const l = length - 1;
        // Exclude header row from count
        output += `Number of students: ${l}\n`;
        // Append total student count to output
        for (const [key, value] of Object.entries(fields)) {
          // Iterate through each field
          if (key !== 'field') {
            // Exclude header field from output
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
            // Append field-specific data to output
          }
        }
        resolve(output);
        // Resolve promise with output
      }
    });
  });
}

const app = http.createServer((req, res) => {
  // Create HTTP server
  res.statusCode = 200;
  // Set response status code to 200
  res.setHeader('Content-Type', 'text/plain');
  // Set content type to plain text
  if (req.url === '/') {
    // Check if URL path is root
    res.write('Hello Holberton School!');
    // Respond with welcome message
    res.end();
    // End response
  }
  if (req.url === '/students') {
    // Check if URL path is /students
    res.write('This is the list of our students\n');
    // Respond with introductory message
    countStudents(process.argv[2].toString()).then((output) => {
      // Count students from provided file
      const outString = output.slice(0, -1);
      // Remove last newline from output
      res.end(outString);
      // Send final output to client
    }).catch(() => {
      res.statusCode = 404;
      // Set response status code to 404
      res.end('Cannot load the database');
      // Respond with error message
    });
  }
});

app.listen(port, hostname, () => {
  // Start server listening on specified port and hostname
});

module.exports = app;
// Export the app for reuse
