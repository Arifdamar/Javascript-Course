/*
**Constructor**
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
    };
};

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
*/

/*
**Prototype**

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    return 2020 - this.yearOfBirth;
};

Person.prototype.getName = function() {
    return this.name;
};

Person.prototype.lastName = 'Damar'

let arif = new Person('arif', 1999, 'student');
let sule = new Person('sule', 1996, 'nurse');

console.log(arif.getName());
console.log(arif.calculateAge());
console.log(arif.hasOwnProperty("lastName"));

console.log("*************")

console.log(sule.getName());
console.log(sule.calculateAge());
*/


function Employee(name, salary){

    if(!(this instanceof Employee)){
        return new Employee(name, salary);
    }
    this.name = name;
    this.salary = salary;
};

Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth() + 1;
    var tax = 0;
    var total = this.salary * month;

    if(total <= 20000){
        tax = total * 0.2;
    }
    else if(total > 20000 && total <= 30000){
        tax = total * 0.25;
    }
    else if(total > 30000){
        tax = total * 0.27;
    }

    return {
        tax: tax,
        paid: total - tax
    }

}

var emp1 = Employee('Arif', 3000);
emp1_salary = emp1.calculateSalary();
console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax}TL vergi kesintisi ile ${emp1_salary.paid}TL maaş almıştır`);

var emp2 = new Employee('Şule', 4000);
emp2_salary = emp2.calculateSalary();
console.log(`${emp2.name} isimli personel toplam ${emp2_salary.tax}TL vergi kesintisi ile ${emp2_salary.paid}TL maaş almıştır`);