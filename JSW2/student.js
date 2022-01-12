const class07Students = ["sharaf", "furqan","cloe", "hamza", "anonymous"];
function addStudentToClass(studentName) {
  // You write code here
  class07Students.push(studentName);
}

function getNumberOfStudents() {
  // You write code here
  let a = class07Students.length;
  console.log(a);
}
addStudentToClass("molvi");
getNumberOfStudents();
console.log(class07Students);
