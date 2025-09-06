"use strict";
// student profile project
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: 'anam',
    age: 27,
    isEnrolled: true,
    course: ['javascript', 'typescript', 'react', 'express.js'],
    scores: [88, 99, 79],
    info: ['anam', 27, true]
};
const student2 = {
    name: 'hasan',
    age: 7,
    isEnrolled: false,
    course: [],
    scores: [88, 79],
    info: ['anam', 27, true]
};
function displayStudent(student) {
    console.log(`name = ${student.name}`);
    console.log(`name = ${student.age}`);
    console.log(`name = ${student.course.join(',')}`);
    console.log(`name = ${student.info}`);
}
displayStudent(student1);
// displayStudent(student2)
//# sourceMappingURL=index.js.map