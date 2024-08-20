const express = require('express');

const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const students = lines.filter((line) => line.trim() !== '').slice(1);

        const totalStudents = students.length;

        const fieldCount = {};
        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');
          if (field) {
            if (!fieldCount[field]) {
              fieldCount[field] = [];
            }
            fieldCount[field].push(firstName);
          }
        });

        let result = `Number of students: ${totalStudents}\n`;
        for (const [field, names] of Object.entries(fieldCount)) {
        }
        resolve(result.trim());
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

// Export the Express app instance
module.exports = app;
