import { ProductService } from "./ProductService";
import { Product } from "./Product";

let _productService = new ProductService();

let result;

result = _productService.getProducts();
// result = _productService.getById(2);



let p = new Product();
p.name = 'Apple IPhone 6';
p.price = 3000;
p.category = 'Phone';

// _productService.saveProduct(p);


// _productService.deleteProduct(_productService.getById(2));



let p1 = new Product();
p1.id = 3;
p1.name = 'Apple IPhone x';
p1.price = 10000;
p1.category = 'Phone';

_productService.saveProduct(p1);

console.log(result);