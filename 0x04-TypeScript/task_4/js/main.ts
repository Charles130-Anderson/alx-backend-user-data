import { Subjects, Teacher } from "./subjects/Teacher";
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";

// Create and export constants for subjects
export const cpp: Cpp = new Subjects.Cpp();
export const java: Java = new Subjects.Java();
export const react: React = new Subjects.React();

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// For Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("\nJava");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("\nReact");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
