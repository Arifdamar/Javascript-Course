import { Product } from "./Product";

export class SimpleDataSource {
    private _products: Array<Product>;

    constructor() {
     this._products = new Array<Product>(
         new Product(1, 'Samsung Galaxy Note 8', 'Phone', 7000),
         new Product(2, 'Samsung Galaxy Note 9', 'Phone', 8000),
         new Product(3, 'Samsung Galaxy Note 10', 'Phone', 9000),
         new Product(4, 'Samsung Galaxy Note 7', 'Phone', 6000),
         new Product(5, 'Samsung Galaxy Note FE', 'Phone', 6500),
         new Product(6, 'Samsung Galaxy Note 6', 'Phone', 5000)
     );
    }

    get products(): Product[]{
        return this._products;
    }
}