/*// Arrow Functions
// ES5
let welcomeES5 = function () {
    console.log('Hello from ES5');
}
welcomeES5();

// ES6
let welcomeES6 = () => {
    console.log('Hello from ES6');
}
welcomeES6();


// With Parameters
// ES5
let multiplyES5 = function (x, y) {
    return x * y;
}
console.log(multiplyES5(3, 5));

// ES6
let multiplyES6 = (x, y) => x * y;
console.log(multiplyES6(2, 4));


// ES5
let splitES5 = function (text) {
    return text.split(' ');
}
console.log(splitES5('Modern JavaScript Course'));

//ES6
let splitES6 = (text) => text.split(' ');
console.log(splitES5('Modern JavaScript Course is Awesome'));


// Object Literals
// ES5
let getProductES5 = function (id, name) {
    return {
        id: id,
        name: name
    }
}
console.log(getProductES5('1', 'Samsung Galaxy Note Fan Edition'));

// ES6
let getProductES6 = (id, name) => ({
    id: id,
    name: name
});
console.log(getProductES6('2', 'Apple IPhone X'));

const phones = [{
        name: 'Apple iPhone X',
        price: 10000
    },
    {
        name: 'Apple iPhone XR',
        price: 15000
    },
    {
        name: 'Samsung Galaxy Note 9',
        price: 8000
    },
    {
        name: 'Samsung Galaxy Note 10',
        price: 9000
    }
];

// ES5
let pricesES5 = phones.map(function (phone) {
    return phone.price;
});
console.log(pricesES5);

// ES6
let pricesES6 = phones.map(phone => phone.price);
console.log(pricesES6);


const arr = [1, 2, 3, 4, 5, 10, 50, 65, 77, 88, 95, 96, 99, 120];

// ES5
let evenES5 = arr.filter(function (x) {
    return x % 2 == 0;
});
console.log(evenES5);

// ES6
let evenES6 = arr.filter(x => x%2== 0);
console.log(evenES6);
*/

/*
// 'this' keyword

// ES5
let listES5 = {
    category: 'phones',
    names: ['Apple IPhone X', 'Samsung Galaxy S9', 'Samsung Galaxy Note 10'],
    call: function(){
        var self = this;
        this.names.map(function(name){
            console.log(`${self.category} ${name}`);
        })
    }
}

listES5.call();

console.log("*******************");

// ES6
let listES6 = {
    category: 'phones',
    names: ['Apple IPhone X', 'Samsung Galaxy S9', 'Samsung Galaxy Note 10'],
    call: function(){
        this.names.map(name => console.log(`${this.category} ${name}`))
    }
}
listES6.call();


// ES5
function GameES5(){
    this.live = 0;
    this.addLive = function(){
        var self = this;
        this.OneUp = setInterval(function(){
            console.log("ES5 "+ ++self.live);
        },1000);
    }
}

let playerES5 = new GameES5();
playerES5.addLive();

// ES6
function GameES6(){
    this.live = 0;
    this.addLive = () => {
        this.OneUp = setInterval(()=> console.log("ES6 "+ ++this.live),1000);
    };
}

let playerES6 = new GameES6();
playerES6.addLive();
*/

/*
// Spread Operator

function getTotal(a,b,c) {
    return a + b + c;
}
console.log(getTotal(1,2,3));

let numbers = [10,20,30];

// ES5
console.log(getTotal.apply(null, numbers));

// ES6
console.log(getTotal(...numbers));


let arr1 = ['two', 'three'];
let arr2 = ['one','four', 'five'];
let arr3 = ['one',...arr1,'four','five'];

arr1.push(...arr2);
arr1.unshift(...arr2);


console.log(arr1);
console.log(arr3);

let h1 = document.querySelector('h1');
let divs = document.querySelectorAll('div');

let tags = [h1,...divs];

tags.forEach(tag => {tag.style.color = 'red'});

console.log(tags);
*/

/*
// Rest Parameters

// ES5

function sumES5(){
    let arr = Array.prototype.slice.call(arguments);

    let result = 0;

    arr.forEach(item => {
        result += item;
    });

    return result;
}

console.log(sumES5(10,20,30));

// ES6
function sumES6(...arr) {
    let result = 0;

    arr.forEach(item => result += item);

    return result;
}

console.log(sumES6(10,20,30,40));


// ES6
function isDriver(age,...years){
    years.forEach(year => console.log(year + " is"+ (2020-year>=age ? " able to": " not able to")));
}

isDriver(17,2000,2005,1999,2006,1998,2004,2001,2002,2003,2007,2008);
*/

/*
// Destructuring


// Destructuring Assignment

var a, b, rest;

[a,b] = [10,20];
console.log(a);
console.log(b);

console.log("*************");

[a,b,...rest] = [10,20,30,40,50,60,70,80,90,100];
console.log(a);
console.log(b);
console.log(rest);

console.log("*************");

({a,b} = {a:10,b:20});
console.log(a);
console.log(b);

console.log("*************");

({a,b,...rest} = {a:10,b:20,c:30,d:40,e:50,f:60});
console.log(a);
console.log(b);
console.log(rest);


// Array Destructuring

const arrConfig = ['localhost', '8080', '900'];

// // ES5
// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeout = arrConfig[2];

//console.log(server, port, timeout);

// // ES6
// const [server, port, timeout] = arrConfig;
// console.log(server, port, timeout);


// Object Destructuring

const objConfig = {
    server: 'localhost',
    port: '8080',
    timeout: '900'
}

// var server = objConfig.server;
// var port = objConfig.port;
// var timeout = objConfig.timeout;

// const {server, port, timeout} = objConfig;

// console.log(server, port, timeout);

// let {server: s, port: p, timeout: t} = objConfig;
// console.log(s, p, t);


// const objConfig1 = {
//     server1: 'localhost',
//     por1t: '8080'
// }

// let {server1, port1, timeout1 = '800'} = objConfig1;
// console.log(server1, port1, timeout1);

// let {server, port, timeout = '800'} = objConfig;
// console.log(server, port, timeout);


const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const [,,wed,,fri] = days;
console.log(wed,fri);
*/

/*
// Arrays in ES6

const boxes = document.querySelectorAll('.box');

// ES5
let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach( box => {
//     box.style.backgroundColor = 'green';
// });

//ES6
// Array.from(boxes).forEach( box => {
//     box.style.backgroundColor = 'green';
// })


// ES5
// for(let i = 0; i<boxesES5.length; i++){
//     if(boxesES5[i].className == 'box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "I'm new now!";
//     boxesES5[i].style.backgroundColor = 'blue';
// }

// ES6
// var boxesES6 = Array.from(boxes);

// for(let box of boxesES6){
//     if(box.className == 'box blue'){
//         continue;
//     }
//     box.textContent = "I'm new now!";
//     box.style.backgroundColor = 'blue';
// }


// from
// let arr = Array.from('Modern JavaScript');

// console.log(arr);

const products = [
    {name: 'Samsung Galaxy S10', price: 8000},
    {name: 'Samsung Galaxy S9', price: 7000},
    {name: 'Samsung Galaxy S8', price: 6000},
    {name: 'Samsung Galaxy S9+', price: 7500}
];

console.log(Array.from(products,prd => 
    prd.name == 'Samsung Galaxy S9'));
console.log(products.filter(prd => prd.price>6999));
console.log(products.findIndex(prd => prd.price==6000));

let numbers = ['a','b','c','d'];

let entries = numbers.entries();

for(let i of entries){
    console.log(i);
}

let keys = numbers.keys();

for(let i of keys){
    console.log(i);
}

let value = numbers.values();

for(let i of value){
    console.log(i);
}
*/


// Maps : key/value pairs (collection)

let val;

const numbers = new Map();

numbers.set(1,'one');
numbers.set('2','two');
numbers.set(3,'three');
numbers.set('four','four');

val = numbers;
val = numbers.get(1);
val = numbers.get('2');
val = numbers.get('four');
val = numbers.size;
val = numbers.has(1);
// numbers.delete('four');
val = numbers.has('four');
// numbers.clear();

console.log(val);

for(var [key,value] of numbers){
    console.log(key + ': ' + value);
}

console.log('***********************');

for(var [key,value] of numbers.entries()){
    console.log(key + ': ' + value);
}

console.log('***********************');

for(var key of numbers.keys()){
    console.log(key);
}

console.log('***********************');

for(var value of numbers.values()){
    console.log(value);
}

console.log('***********************');

numbers.forEach((value,key) => {
    console.log(key + ': ' + value);
});


var first = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
]);

var second = new Map([
    [4,'four'],
    [5,'five']
]);

var merged = new Map([...first, ...second]);

console.log(merged);
