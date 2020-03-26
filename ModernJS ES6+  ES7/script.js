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