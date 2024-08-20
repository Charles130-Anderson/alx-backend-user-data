const fs = require('fs');

/**
 * Reads student data from file.
 *
 * @param {string} path - Path to CSV file.
 */
function countStudents(path) {
  // Check if the file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  // Read and process file content
  const data = fs.readFileSync(path, 'utf8');
  const students = data.split('\n')
    .map(line => line.split(','))
    .filter(fields => fields.length === 4 && fields[0] !== 'firstname')
    .map(fields => ({
      firstName: fields[0],
      lastName: fields[1],
      age: fields[2],
      field: fields[3],
    }));

  // Group students by field
  const csStudents = students
    .filter(student => student.field === 'CS')
    .map(student => student.firstName);
  const sweStudents = students
    .filter(student => student.field === 'SWE')
    .map(student => student.firstName);

  // Output results
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
}

module.exports = countStudents;
