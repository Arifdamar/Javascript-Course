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

        },
        getTotal: function(){
            data.totalPrice = 0;

            data.products.forEach(product => {
                data.totalPrice += product.price;
            });
            return data.totalPrice;
        },
        getProductById: function(id){
            let product = null;

            data.products.forEach(prd => {
                if(prd.id == id){
                    product = prd;
                }
            });

            return product;
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
        productCard : '#productCard',
        totalTL: '#total-tl',
        totalDollar: '#total-dollar'
    };

    const addToHtml = product => {
        return `
        <tr>
            <td>${product.id+1}</td>
            <td>${product.name}</td>
            <td>${product.price}$</td>
            <td class="text-right">
                    <i data-id="${product.id}" class="far fa-edit edit-product"></i>
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
        clearInputs: function(){
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard: function(){
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal: function(total){
            document.querySelector(Selectors.totalDollar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total * 6.7;
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

        // edit product
        document.querySelector(UISelectors.productList).addEventListener('click', productEditSubmit);
    }

    const productAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            // Add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // Add item to list
            UICtrl.addProductToList(newProduct);

            // Get Total
            const total = ProductCtrl.getTotal();

            // Show Total
            UICtrl.showTotal(total);

            // clear Inputs
            UICtrl.clearInputs();
        }

        e.preventDefault();
    }

    const productEditSubmit = (e) => {

        if(e.target.classList.contains("edit-product")){
            const id = e.target.getAttribute("data-id");

            const product = ProductCtrl.getProductById(id);
            console.log(product);
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