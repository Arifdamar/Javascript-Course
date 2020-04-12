var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
        this.color = color || 'Yellow';
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi travels travels from {x: " + this.location.x + ", y: " + this.location.y + "} to {x: " + point.x + ", y: " + point.y + "}");
        this.setLocation(point);
    };
    Taxi.prototype.getLocation = function () {
        return this.location;
    };
    Taxi.prototype.setLocation = function (value) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("Wrong coordinates");
        }
        this.location = value;
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
taxi_1.travelTo({ x: 5, y: 9 });
console.log(taxi_1.getLocation().x);
console.log(taxi_1.getLocation().y);
var taxi_2 = new Taxi({ x: 2, y: 0 });
taxi_2.travelTo({ x: 3, y: 4 });
console.log(taxi_2.getLocation());
