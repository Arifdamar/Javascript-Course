/*
// 1-) Global variable naming conflicts

// script.js
var name = 'Arif';

// app.js
var name = 'Ömer';

console.log(name);
*/

/*
// 2-) Encapsulation

var Counter = {
    number: 0,
    increment: function () {
        return ++this.number;
    },
    decrement: function () {
        return --this.number;
    }
}

console.log(Counter.increment());
console.log(Counter.increment());
Counter.number = 10;
console.log(Counter.increment());
console.log(Counter.decrement());
*/

/*
// IIFE (Immediately Invoked Function Expressions)

(function(){
    var name = 'Arif';
    console.log(name);
})();

(function(){
    var name = 'Ömer';
    console.log(name);
})();
*/

/*
var Module = (function(){

    // private members
    let number = 0;

    let increment = function(){
        return ++number;
    }
    
    let decrement = function(){
        return --number;
    }

    return {
        // public members
        increment,
        decrement
    }

})();

// console.log(Module.number);
console.log(Module.increment());
console.log(Module.increment());
console.log(Module.decrement());
*/

/*
var Module = (function() {
    var privateMethod = function(){

    }

    return {
        publicMethod: function(){

        }
    }
})();

Module.publicMethod();
*/



const products = [
    {name: 'Samsung Galaxy S8', price:8000},
    {name: 'Samsung Galaxy S8+', price:8500},
    {name: 'Samsung Galaxy S9', price:9000},
    {name: 'Samsung Galaxy S9+', price:9500}
];

var ProductController = (function(data){
    // private members
    var collections = data || [];

    const addProduct = function(product){
        collections.push(product);
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index >= 0){
            collections.splice(index, 1);
        }
    }

    const getProducts = function(){
        return collections;
    }

    // Public members
    return {
        addProduct,
        removeProduct,
        getProducts
    }

})(products);

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

ProductController.removeProduct(products[0]);

ProductController.addProduct(products[2]);
ProductController.addProduct(products[3]);

console.log(ProductController.getProducts());

// Module Extending

var extended = (function(m){
    m.sayHello = function(){
        console.log('Hello from extended module');
    }

    return m;
})(ProductController || {});

extended.sayHello();
console.log(extended.getProducts());