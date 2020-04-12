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

let a: number = 5;
let b: string = 'a';
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<string> = ['a', 'b', 'c'];
let g: any[] = [1,2,'3',true];
let h: [string,number,boolean] = ['1',2,true]; // tuple

const creditPayment = 0;
const transferPayment = 1;
const eftPayment = 2;

enum Payment {credit, transfer, eft};

let credit = Payment.credit; // 0
let transfer = Payment.transfer; // 1
let eft = Payment.eft; // 2