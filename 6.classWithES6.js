class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.school = "Shankhari gati school"
    }
}

const student1 = new Student('asif', 23);
const student2 = new Student('sakib', 20);

console.log(student1, student2);
console.log(student1);
console.log(student2);
console.log(student1.name);
console.log(student2.name);
console.log(student1.age);
console.log(student2.age);
