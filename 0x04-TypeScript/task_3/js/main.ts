/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object row with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert a row
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(${JSON.stringify(row)})`);
// Output: Insert row {firstName: "Guillaume", lastName: "Salva"}

// Update the row with age
const updatedRow: RowElement = {
  ...row,
  age: 23
};
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, ${JSON.stringify(updatedRow)})`);
// Output: Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})`);
// Output: Delete row id 125
