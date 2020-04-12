interface Point {
    x: number,
        y: number
}

interface Vehicle {

    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    constructor(private _location: Point, private _color?: String) {
        this._color = _color || 'Yellow';
    }

    travelTo(point: Point): void {
        console.log(`Taxi travels travels from {x: ${this._location.x}, y: ${this._location.y}} to {x: ${point.x}, y: ${point.y}}`);
        this.location = point;
    }

    get location() {
        return  this._location;
    }

    set location(value: Point) {
        if(value.x < 0 || value.y < 0){
            throw new Error("Wrong coordinates");
        }
        this._location = value;
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
taxi_1.travelTo({x: 5,y: 9});
console.log(taxi_1.location.x);
console.log(taxi_1.location.y);

let taxi_2: Taxi = new Taxi({x:2,y:0});
taxi_2.travelTo({x:3,y:4});
console.log(taxi_2.location);