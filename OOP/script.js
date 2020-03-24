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

/*
**Constructor and prototype exercise**
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
*/

/*
**Object.create**

let personProto = {
    calculateAge: function(){
        return 2020 - this.yearOfBirth;
    }
}

let arif = Object.create(personProto);
arif.name = "Arif";
arif.yearOfBirth = 1999;
arif.job = "student";

let sule = Object.create(personProto, {
    name: {value: 'Şule'},
    yearOfBirth: {value: 1996},
    job: {value: 'nurse'}
});

console.log(arif);
console.log(arif.calculateAge());

console.log(sule);
console.log(sule.calculateAge());
*/

/*
// **Prototypal Inheritance**

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return 2020 - this.yearOfBirth;
}

let Teacher = function(name, yearOfBirth, subject, job='Teacher') {
    Person.call(this, name, yearOfBirth, job);
    this.subject = subject;
}


// Inherit the Person prototype methods
Teacher.prototype = Object.create(Person.prototype);

// Set Teacher constructor
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
    return 'Hello, my name is ' + this.name;
}

let sule = new Teacher('Şule', 1996, 'Math');

console.log(sule);
console.log(sule.calculateAge());
console.log(sule.greeting());
*/

/*
//**Built-in Constructors**
// String

var str1 = 'Arif';
var str2 = new String('Arif');

console.log(str1);
console.log(typeof(str1));
console.log('***********************');
console.log(str2);
console.log(typeof(str2));

if (str1 === 'Arif') {
    console.log('Yep');
}
else{
    console.log('Nope');
}

if (str1 === str2) {
    console.log('Yep');
}
else{
    console.log('Nope');
}

if (str1 == str2) {
    console.log('Yep');
}
else{
    console.log('Nope');
}

String.prototype.repeat = function(n) {
    return new Array(n+1).join(this);
}

console.log('Arif'.repeat(5));


// Number
var num1 = 10;
var num2 = new Number(10);

// Boolean
var bool1 = true;
var bool2 = new Boolean(true);

// Object
var obj1 = {
    name: 'Arif'
}
var obj2 = new Object({
    name: 'Arif'
});

// Array
var arr1 = ['Arif','Ömer','Utku','Yusuf'];
var arr2 = new Array('Arif','Ömer','Utku','Yusuf');

Array.prototype.remove = Array.prototype.remove || function(member) {
    var index = this.indexOf(member);

    if (index > -1) {
        this.splice(index, 1);
    }
    return this;
}

console.log(arr1.remove('Ömer'));
*/

/*
//** Inheritance Exercise**


// Person Constructor
function Person(name){
    this.name = name;
}

Person.prototype.Introduce = function(){
    console.log('Hello, my name is ' + this.name);
}

// Teacher Constructor
function Teacher(name, branch){
    Person.call(this, name);
    this.branch = branch;
}

// Teacher Inherits from Person
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function() {
    console.log('I teach ' + this.branch);
}

// Student Constructor
function Student(name, number) {
    Person.call(this, name);
    this.number = number;
}

// Student Inherits from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function(){
    console.log('My student number is ' + this.number + ' and I\'ve alredy studied hard!');
}


// Headmaster Constructor
function Headmaster(name, branch){
    Teacher.call(this, name, branch);
}

// Headmaster Inherits from Teacher
Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;
Headmaster.prototype.shareTask = function() {
    console.log('I\'ve already shared task!');
}


let p1 = new Person('Arif');
p1.Introduce(); // Person

let t1 = new Teacher('Metin','Biology');
t1.Introduce(); // Person
t1.teach(); // Teacher

let s1 = new Student('Utku', 'G171210025');
s1.Introduce(); // Person
s1.study(); // Student

let hm1 = new Headmaster('Ömer', 'Math');
hm1.Introduce(); // Person
hm1.teach(); // Teacher
hm1.shareTask(); // Headmaster
*/

/*
//**Primitive & Objects**

var a = 10;
var b = a;
a = 15;

console.log(a);
console.log(b);

var obj1 = {
    name: 'Arif',
    age: 20
}

var obj2 = obj1;
obj1.age = 21;

console.log(obj1);
console.log(obj2);

console.log('*********************');

var num = 50;
var account = {
    name: 'Arif',
    accountnumber: '12345'
}

console.log(num);
console.log(account);

function update(a,b){
    a = 100;
    b.accountnumber = '11111';
}

update(num,account);

console.log(num);
console.log(account);


var products = [
    {name: 'Product name1', price: 1000},
    {name: 'Product name2', price: 1001},
    {name: 'Product name3', price: 1002},
    {name: 'Product name4', price: 1003},
    {name: 'Product name5', price: 1004},
    {name: 'Product name6', price: 1005},
    {name: 'Product name7', price: 1006},
    {name: 'Product name8', price: 1007},
    {name: 'Product name9', price: 1008},
    {name: 'Product name10', price: 1009},
    {name: 'Product name11', price: 1010},
    {name: 'Product name12', price: 1011},
    {name: 'Product name13', price: 1012},
    {name: 'Product name14', price: 1013}
];

function filterProducts(prd) {
// if this parameter was called by value all the datas would copied unnecessarily
// and it would cause high memory usage
}

filterProducts(products);
*/

/*
//**Callback Functions**

let val;

function MultipleByTwo(a,b,c,callback) {
    let arr = [];

    // if callback is not null and callback is a function
    if (callback && typeof callback === 'function') {
        for(let i = 0; i <3;i++){
            arr[i] = callback(arguments[i] * 2);
        }
    }

    return arr;
}

function addOne(a){
    return a + 1;
}

function addTwo(a){
    return a + 2;
}

function addThree(a){
    return a + 3;
}

val = MultipleByTwo(2,3,4,addOne);
console.log(val);

val = MultipleByTwo(2,3,4,addTwo);
console.log(val);

val = MultipleByTwo(2,3,4,addThree);
console.log(val);

val = MultipleByTwo(2,3,4);
console.log(val);

val = MultipleByTwo(2,3,4,10);
console.log(val);

val = MultipleByTwo(2,3,4,function(a){
    return a + 1;
});
console.log(val);

val = MultipleByTwo(2,3,4, a => {return a+1});
console.log(val);


//val = addOne(5);
//console.log(val);

// for(let i = 0; i <val.length; i++){
//     val[i] = addOne(val[i]);
// }
*/

/*
//**Immediate Functions**


// (function() {

// }());

// Both are the same

// (function() {

// })();

(function(name) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var today = new Date();

    var msg = 'Welcome. My name is ' + name + ' and today is ' + days[today.getDay()];

    console.log(msg);
}('Arif'));
*/

/*
//**Functions that return Functions**

function Question(hobby){
    switch(hobby){
        case 'cars':
            return function(name){
                console.log('Dear ' + name + ', do you have a car?');
            }
            break;
        case 'books':
            return function(name){
                console.log('Dear ' + name + ', what was the last book you read?');
            }
            break;
        case 'movies':
            return function(name){
                console.log('Dear ' + name + ', what was the last movie you watched?');
            }
            break;
        case 'software':
            return function(name){
                console.log('Dear ' + name + ', what is your favorite programming language?');
            }
            break;
        default:
            return function(name){
                console.log('You should have a hobby, ' + name);
            }
    }
}

let carQuestion = Question('cars');

carQuestion('Arif');
carQuestion('Şule');

let bookQuestion = Question('books');

bookQuestion('Arif');
bookQuestion('Şule');

let softwareQuestion = Question('software');

softwareQuestion('Arif');
softwareQuestion('Şule');
softwareQuestion('Ömer');
*/

/*
//**Getter & Setters**
const person = {
    firstName: 'Arif',
    lastName: 'Damar'
}

Object.defineProperty(person,'fullName',{
    get : function() {
        return `${this.firstName} ${this.lastName}`;
    },
    set : function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'Age',{
    value: 50,
    writable: true
})

person.Age = 55;

console.log(person.fullName);
person.fullName = 'Şule Damar';
console.log(person.fullName);
console.log(person);
*/

/*
//**Call, Apply & Bind
var welcome = function(a,b){
    console.log('Welcome '+ this.name + '. Are you interested in ' + a + ' and ' + b + '?');
}

var arif = {name: 'Arif'};
var omer = {name: 'Ömer'};

welcome.call(arif,'asp.net','angularjs');
welcome.call(omer,'asp.net','angularjs');

console.log('**************************');

welcome.apply(arif,['asp.net','angularjs']);
welcome.apply(omer,['asp.net','angularjs']);

console.log('**************************');

welcomeArif = welcome.bind(arif);
welcomeArif('asp.net','angularjs');

welcomeOmer = welcome.bind(omer);
welcomeOmer('asp.net','angularjs');
*/


//** Demo: Numeric Range **

var num = {
    min:0,
    max:100,
    checkNumericRange: function(value) {
        if(typeof value !== 'number'){
            return NaN;
        }
        else{
            return value >= this.min && value <= this.max;
        }
    }
}

console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));
console.log(num.checkNumericRange(110));
console.log(num.checkNumericRange('a'));

console.log('***************************');
console.log('**call**');

var num1 = {min: 50, max:120};

console.log(num.checkNumericRange.call(num1,20));
console.log(num.checkNumericRange.call(num1,110));

console.log('***************************');
console.log('**apply**');

console.log(num.checkNumericRange.apply(num1,[105]));
console.log(num.checkNumericRange.apply(num1,[40]));

console.log('***************************');
console.log('**bind**');

CheckNumericRangeNum1 = num.checkNumericRange.bind(num1);
console.log(CheckNumericRangeNum1(10));
console.log(CheckNumericRangeNum1(115));










