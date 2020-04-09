// Storage Controller

const StorageController = (function () {


})();

// Product Controller

const ProductController = (function () {

    // private
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }

    // public
    return {
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        addProduct: function (name, price) {
            let id;

            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;

        }
    }

})();

// UI Controller

const UIController = (function () {

    const Selectors = {
        productList: '#item-list',
        addButton: '#addBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard : '#productCard'
    };

    const addToHtml = product => {
        return `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}$</td>
            <td class="text-right">
                <button type="submit" class="btn btn-warning btn-sm">
                    <i class="far fa-edit"></i>
                </button>
            </td>
        </tr>
        `;
    }

    return {
        createProductList: function (products) {
            let html = '';

            products.forEach(product => {
                html += addToHtml(product);
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors: function () {
            return Selectors;
        },
        addProductToList: function (product) {
            document.querySelector(Selectors.productCard).style.display = 'block';

            let newProduct = addToHtml(product);
            
            document.querySelector(Selectors.productList).innerHTML += newProduct;
        },
        clearInputs(){
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard: function(){
            document.querySelector(Selectors.productCard).style.display = 'none';
        }
    }

})();

// App Controller

const App = (function (ProductCtrl, UICtrl) {

    const UISelectors = UICtrl.getSelectors();

    // Load Event Listeners
    const loadEventListeners = function () {

        // add product event
        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);
    }

    const productAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' || productPrice !== '') {
            // Add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // Add item to list
            UICtrl.addProductToList(newProduct);

            UICtrl.clearInputs();
        }

        e.preventDefault();
    }

    return {
        init: function () {
            console.log('Starting app...');
            const products = ProductCtrl.getProducts();

            if(products.length === 0) {
                UICtrl.hideCard();
            }
            else{
                UICtrl.createProductList(products);
            }


            loadEventListeners();

        }
    }

})(ProductController, UIController);

App.init();