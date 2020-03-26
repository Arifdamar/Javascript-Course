// Arrow Functions
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