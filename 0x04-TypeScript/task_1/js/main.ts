// Teacher interface definition
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface definition
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// printTeacherFunction interface definition
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// printTeacher function implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// StudentClass constructor interface definition
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// StudentClass interface definition
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student = new StudentClass("Jane", "Doe");
console.log(student.displayName()); // Output: Jane
console.log(student.workOnHomework()); // Output: Currently working
