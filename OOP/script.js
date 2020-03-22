// Object literals
// let arif = {
//     name: 'arif',
//     yearOfBirth: 1999,
//     job: 'student'
// }

// console.log(arif);

// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2020 - this.yearOfBirth;
//     }
// }

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        return 2020 - this.yearOfBirth;
    }
}

let arif = new Person('arif', 1999, 'student');
let omer = new Person('şule', 1996, 'nurse');

console.log(arif.name);
console.log(arif.yearOfBirth);
console.log(arif.job);
console.log(arif.calculateAge());

console.log("*****************************");

console.log(omer.name);
console.log(omer.yearOfBirth);
console.log(omer.job);
console.log(omer.calculateAge());