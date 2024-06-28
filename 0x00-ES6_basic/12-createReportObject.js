// This module exports a function that creates a report object
// The report object includes a list of all employees and a method to get the number of departments

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}

