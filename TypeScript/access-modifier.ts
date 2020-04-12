interface Point {
    x: number,
        y: number
}

interface Vehicle {

    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    constructor(private location: Point, private color?: String) {
        this.color = color || 'Yellow';
    }

    travelTo(point: Point): void {
        console.log(`Taxi travels travels from {x: ${this.location.x}, y: ${this.location.y}} to {x: ${point.x}, y: ${point.y}}`);
        this.location.x = point.x;
        this.location.y = point.y;
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

let taxi_2: Taxi = new Taxi({x:2,y:0});
taxi_2.travelTo({x:3,y:3});