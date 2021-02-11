const math = require('./math');
const enrollStudents = require('./Student/enroll');
const attendanceStudent = require('./Student/attendance');

let sq01 = math.calculateSquare(5);
let sq02 = math.calculateSquare(10);

console.log(sq01+sq02);

enrollStudents.addNewStudent('Suneel');
enrollStudents.addNewStudent('Usama');

console.log(enrollStudents.getAllStudents());

attendanceStudent.markAsPresent('Suneel');
console.log(enrollStudents.getAllStudents());
