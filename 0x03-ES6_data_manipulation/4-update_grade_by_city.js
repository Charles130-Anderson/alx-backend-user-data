export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  // Filter students for the given city and update their grades
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find matching new grade for the student
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      // Assign the new grade or 'N/A' if not found
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      // Return updated student object with new grade
      return {
        ...student,
        grade: grade,
      };
    });
}

