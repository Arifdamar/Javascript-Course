var Taxi = /** @class */ (function () {
    function Taxi(startingPoint, color) {
        this.currentLocation = startingPoint;
        this.color = color || 'Yellow';
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi travels travels from {x: " + this.currentLocation.x + ", y: " + this.currentLocation.y + "} to {x: " + point.x + ", y: " + point.y + "}");
        this.currentLocation.x = point.x;
        this.currentLocation.y = point.y;
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus(startingPoint) {
        this.currentLocation = startingPoint;
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus travels from x: " + this.currentLocation.x + ", y: " + this.currentLocation.y + " to x: " + point.x + ", y: " + point.y);
        this.currentLocation.x = point.x;
        this.currentLocation.y = point.y;
    };
    return Bus;
}());
var taxi_1 = new Taxi({ x: 1, y: 1 }, 'Black');
taxi_1.travelTo({ x: 5, y: 8 });
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
console.log(taxi_1.color);
var taxi_2 = new Taxi({ x: 2, y: 0 });
taxi_2.travelTo({ x: 3, y: 3 });
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
console.log(taxi_2.color);
