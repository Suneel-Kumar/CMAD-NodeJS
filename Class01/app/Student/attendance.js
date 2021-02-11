const enroll = require('./enroll');

function markAsPresent(studentName){
    let matchingStudent = enroll.getAllStudents().find(student => student.name == studentName);
    console.log(matchingStudent);
    matchingStudent.present = true
}

function markAsAbsent(studentName){
    let matchingStudent = enroll.getAllStudents().find(student => student.name == studentName);
    matchingStudent.present = false
}

module.exports.markAsPresent = markAsPresent;
module.exports.markAsAbsent = markAsAbsent;