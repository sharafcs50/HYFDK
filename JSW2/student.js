const class07Students = ["sharaf", "furqan","cloe", "hamza", "anonymous"];

function addStudentToClass(studentName) {
  // You write code here
  if ((class07Students.length) <= 6) {
  class07Students.push(studentName);
  } else {
    console.log("Cannot add more students");
  }
}

function getNumberOfStudents() {
  // You write code here
  let a = (class07Students.length);
  console.log(a);
}
addStudentToClass("molvi");
getNumberOfStudents();
console.log(class07Students);
console.log(class07Students.length);
addStudentToClass("mshruuer");