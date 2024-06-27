// HolbertonClass represents a class at Holberton with a specific year and location.
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;         // Initialize the year of the class
    this._location = location; // Initialize the location of the class
  }

  // Getter for retrieving the year of the class
  get year() {
    return this._year;
  }

  // Getter for retrieving the location of the class
  get location() {
    return this._location;
  }
}

// Instances of HolbertonClass for the years 2019 and 2020 in San Francisco
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// StudentHolberton represents a student at Holberton with a first name, last name, and associated class
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;         // Initialize the first name of the student
    this._lastName = lastName;           // Initialize the last name of the student
    this._holbertonClass = holbertonClass; // Initialize the class the student belongs to
  }

  // Getter for retrieving the full name of the student
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter for retrieving the HolbertonClass instance associated with the student
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter for retrieving a full description of the student including name, class year, and location
  get fullStudentDescription() {
    return `${this.fullName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

// Creating instances of StudentHolberton with specific names and associated HolbertonClass instances
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Exporting an array containing all instances of StudentHolberton
export default [student1, student2, student3, student4, student5];
