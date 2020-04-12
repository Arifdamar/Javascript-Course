import { Taxi } from './Taxi';

let taxi_1: Taxi = new Taxi({x:1, y:1}, 'Black');
taxi_1.travelTo({x: 5,y: 9});
console.log(taxi_1.location.x);
console.log(taxi_1.location.y);

let taxi_2: Taxi = new Taxi({x:2,y:0});
taxi_2.travelTo({x:3,y:4});
console.log(taxi_2.location);