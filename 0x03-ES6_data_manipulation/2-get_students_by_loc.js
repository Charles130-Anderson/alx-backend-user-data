// Function to export as default
export default function getStudentIdsSum(students) {
  // Check if input is an array
  if (Array.isArray(students)) {
    // Use reduce to sum up ids in the array of objects
    return students.reduce((accumulator, each) => accumulator + each.id, 0);
  }
  // Return an empty array if input is not an array
  return [];
}
