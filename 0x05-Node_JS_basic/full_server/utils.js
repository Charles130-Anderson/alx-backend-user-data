function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {        reject(new Error('Cannot load the database')); 
        return;
      }

      const students = data
        .trim()
        .split('\n')
        .slice(1)
        .filter((line) => line !== ''); 
      const fields = {};

      students.forEach((student) => {        const [firstName, , , field] = student.split(','); 
        if (!fields[field]) fields[field] = [];        fields[field].push(firstName); 
      });

      resolve(fields); 
    });
  });
}

module.exports = readDatabase;
