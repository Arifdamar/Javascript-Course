/*
let number = 5;

console.log(number);

number = 'a';

console.log(number);
*/
/*
let a: number;

a = 5;
a = 'a';
a= true;
*/
var a = 5;
var b = 'a';
var c = true;
var d;
var e = [1, 2, 3];
var f = ['a', 'b', 'c'];
var g = [1, 2, '3', true];
var h = ['1', 2, true]; // tuple
var creditPayment = 0;
var transferPayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["credit"] = 0] = "credit";
    Payment[Payment["transfer"] = 1] = "transfer";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
;
var credit = Payment.credit; // 0
var transfer = Payment.transfer; // 1
var eft = Payment.eft; // 2
