/*
let message = 'Hello World!';

let count = message.length; // IntelliSense works properly
*/

let message;

message = 'Hello World!';

let count = (<string>message).length;

let Length = (message as string).length;