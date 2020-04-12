import { Vehicle } from './Vehicle'
import { Point } from './Point';

export class Bus implements Vehicle {
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