const getStudentsByLocation = (students, city) =>
  Array.isArray(students) ? students.filter(student => student.location === city) : [];

export default getStudentsByLocation;
