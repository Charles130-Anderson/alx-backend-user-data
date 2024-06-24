export default function createIteratorObject(report) {
  const employees = [];
  for (const departmentEmployees of Object.values(report.allEmployees)) {
    employees.push(...departmentEmployees);
  }
  return employees;
}
