import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {

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