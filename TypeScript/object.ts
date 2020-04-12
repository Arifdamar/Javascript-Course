interface Point {
    x: number,
        y: number
}

interface Vehicle {
    currentLocation: Point;

    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    currentLocation: Point;
    color: String;

    constructor(startingPoint: Point, color?: String) {
        this.currentLocation = startingPoint;
        this.color = color || 'Yellow';
    }

    travelTo(point: Point): void {
        console.log(`Taxi travels travels from {x: ${this.currentLocation.x}, y: ${this.currentLocation.y}} to {x: ${point.x}, y: ${point.y}}`);
        this.currentLocation.x = point.x;
        this.currentLocation.y = point.y;
    }
}

class Bus implements Vehicle {
    currentLocation: Point;

    constructor(startingPoint: Point) {
        this.currentLocation = startingPoint;
    }

    travelTo(point: Point): void {
        console.log(`Bus travels from x: ${this.currentLocation.x}, y: ${this.currentLocation.y} to x: ${point.x}, y: ${point.y}`);
        this.currentLocation.x = point.x;
        this.currentLocation.y = point.y;
    }
}

let taxi_1: Taxi = new Taxi({x:1, y:1}, 'Black');
taxi_1.travelTo({x: 5,y: 8});
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
console.log(taxi_1.color);

let taxi_2: Taxi = new Taxi({x:2,y:0});
taxi_2.travelTo({x:3,y:3});
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
console.log(taxi_2.color);