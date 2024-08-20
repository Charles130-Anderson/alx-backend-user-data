const fs = require('fs');

/**
 * Asynchronously reads and processes
 * student data from a CSV file.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise<void>}
 */
async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.promises.readFile(path, 'utf8');

    // Split data into lines and filter out empty lines
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    if (rows.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    // Extract header and initialize field map
    const header = rows.shift().split(',');
    const fieldMap = {};

    // Process each row
    rows.forEach((row) => {
      const student = row.split(',');
      if (student.length > 1) {
        const field = student[header.indexOf('field')];
        if (field) {
          if (!fieldMap[field]) {
            fieldMap[field] = [];
          }
          fieldMap[field].push(student[0]);
        }
      }
    });

    // Log the number of students
    console.log(`Number of students: ${rows.length}`);

    // Log the number of students in each field
    for (const field in fieldMap) {
      if (Object.hasOwnProperty.call(fieldMap, field)) {
        console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
