// student profile project

// const student = {
//     name:'anam',
//     age:27,
//     isEnrolled:true,
//     course:['javascript', 'typescript', 'react', 'express.js'],
//     scores:[88,99,79],
//     info:['anam',27,true]
// }

type Student = {
    name: string,
    age:number,
    isEnrolled:boolean,
    courses:string[],
    scores:number[],
    info:[string,number,boolean]
}

const student1 : Student = { 
    name:'anam',
    age:27,
    isEnrolled:true,
    courses:['javascript', 'typescript', 'react', 'express.js'],
    scores:[88,99,79],
    info:['anam',27,true]
}


const student2 : Student = {
    name:'hasan',
    age:7,
    isEnrolled:false,
    courses:[],
    scores:[88,79],
    info:['anam',27,true]
}

function displayStudent(student:Student):void{
    console.log(`name = ${student.name}`)
    console.log(`age = ${student.age}`)
    console.log(`Courses = ${student.courses.join(',')}`)
    console.log(`info = ${student.info}`)
}

displayStudent(student1)
// displayStudent(student2)