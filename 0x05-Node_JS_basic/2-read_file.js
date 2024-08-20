// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data by new lines and filter out empty lines
    const lines = data.trim().split('\n').filter(line => line.length > 0);
    
    // Exclude the header line
    const students = lines.slice(1);
    
    // Log the total number of students
    console.log(`Number of students: ${students.length}`);
    
    // Initialize a map to group students by field
    const fields = {};
    
    // Iterate over each student record
    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');
      
      // Add the student to the respective field group
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    
    // Log the number of students in each field and their names
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Throw an error if the file cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
