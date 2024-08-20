const express = require('express');
const fs = require('fs');

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
          result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        resolve(result.trim());
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.status(500).send('Database path not provided');
    return;
  }

  res.write('This is the list of our students\n');
  countStudents(databasePath)
    .then((data) => {
      res.end(data);
    })
    .catch((err) => {
      res.status(500).end(err.message);
    });
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
