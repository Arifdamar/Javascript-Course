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

    travelTo(point: Point): void{
        console.log(`Taxi travels to x: ${point.x}, y: ${point.y}`);
    }
}

class Bus implements Vehicle {
    currentLocation: Point;

    travelTo(point: Point): void{
        console.log(`Bus travels to x: ${point.x}, y: ${point.y}`);
    }
}