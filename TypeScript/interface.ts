interface Point {
    x: number,
    y: number
}

interface Passanger{
    name: string,
    phone: string
}

interface Vehicle {
    currentLocation: Point;

    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassanger(passanger: Passanger): void;
    removePassanger(passanger: Passanger): void;
}