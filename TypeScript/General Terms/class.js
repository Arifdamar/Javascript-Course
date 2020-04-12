var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi travels to x: " + point.x + ", y: " + point.y);
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus travels to x: " + point.x + ", y: " + point.y);
    };
    return Bus;
}());
