"use strict";
exports.__esModule = true;
var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
        this._color = _color || 'Yellow';
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi travels travels from {x: " + this._location.x + ", y: " + this._location.y + "} to {x: " + point.x + ", y: " + point.y + "}");
        this.location = point;
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("Wrong coordinates");
            }
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    return Taxi;
}());
exports.Taxi = Taxi;
