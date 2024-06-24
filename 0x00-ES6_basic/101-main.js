import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js'; // Corrected import path

const employees = {
  ...createEmployeesObject('engineering', ['John Doe', 'Guillaume Salva']),
  ...createEmployeesObject('design', ['Jane Doe', 'Sylvie Dupont']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator)); // John Doe | Guillaume Salva | Jane Doe | Sylvie Dupont
