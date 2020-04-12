"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this._products = new Array(new Product_1.Product(1, 'Samsung Galaxy Note 8', 'Phone', 7000), new Product_1.Product(2, 'Samsung Galaxy Note 9', 'Phone', 8000), new Product_1.Product(3, 'Samsung Galaxy Note 10', 'Phone', 9000), new Product_1.Product(4, 'Samsung Galaxy Note 7', 'Phone', 6000), new Product_1.Product(5, 'Samsung Galaxy Note FE', 'Phone', 6500), new Product_1.Product(6, 'Samsung Galaxy Note 6', 'Phone', 5000));
    }
    Object.defineProperty(SimpleDataSource.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: true,
        configurable: true
    });
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
