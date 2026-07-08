// class Student {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     study() {
//         console.log(`${this.name} is studying`);
//     }

// }

// const s1 = new Student("Abhishek", 22);

// console.log(s1);

// s1.study();


//multiple objects

class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log(this.name);
        console.log(this.salary);
    }

}

const e1 = new Employee("Rahul",40000);
const e2 = new Employee("Anjali",60000);

e1.display();

e2.display();