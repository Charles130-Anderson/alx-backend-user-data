const http = require('http');
const students = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

/**
 * Creates and exports an HTTP server.
 * @type {http.Server}
 */
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    
    try {
      const data = await students(process.argv[2]);
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
    } catch (err) {
      res.write(err.message);
    }
    
    res.end();
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
