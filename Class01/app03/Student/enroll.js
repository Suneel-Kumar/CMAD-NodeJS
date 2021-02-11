let students = []

function addNewStudent(name) {
    students.push({ name: name, present: false })
}

function getAllStudents() {
    return students;
}

module.exports.addNewStudent = addNewStudent;
module.exports.getAllStudents = getAllStudents;