// Storage Controller
const StorageController = (function () {


    return {
        storeProduct: function (product) {

            let products;

            if (localStorage.getItem('products') === null) {
                products = [];
                products.push(product);
            } else {
                products = JSON.parse(localStorage.getItem('products'));
                products.push(product);
            }
            localStorage.setItem('products', JSON.stringify(products));
        },
        getProducts: function () {
            let products;
            if (localStorage.getItem('products') === null) {
                products = [];
            } else {
                products = JSON.parse(localStorage.getItem('products'));
            }
            return products;
        },
        updateProduct: function (updatedProduct) {
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach((prd,index) => {
                if(updatedProduct.id === prd.id){
                    products.splice(index, 1, updatedProduct);
                }
            });
            localStorage.setItem('products', JSON.stringify(products));
        },
        deleteProduct: function(id){
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach((prd,index) => {
                if(id === prd.id){
                    products.splice(index, 1);
                }
            });
            localStorage.setItem('products', JSON.stringify(products));
        }
    }

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
        setProducts: function (products) {
            data.products = products;
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
        updateProduct: function (newName, newPrice) {
            let product = null;

            data.products.forEach(prd => {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = newName;
                    prd.price = parseFloat(newPrice);

                    product = prd;
                }
            });

            return product;
        },
        deleteProduct: function (product) {
            data.products.forEach((prd, index) => {
                if (prd.id == product.id) {
                    data.products.splice(index, 1);
                }
            });
        },
        getTotal: function () {
            data.totalPrice = 0;

            data.products.forEach(product => {
                data.totalPrice += product.price;
            });
            return data.totalPrice;
        },
        getProductById: function (id) {
            let product = null;

            data.products.forEach(prd => {
                if (prd.id == id) {
                    product = prd;
                }
            });

            return product;
        },
        getCurrentProduct: function () {
            return data.selectedProduct;
        },
        setCurrentProduct: function (product) {
            data.selectedProduct = product;
        }
    }

})();

// UI Controller
const UIController = (function () {

    const Selectors = {
        productList: '#item-list',
        productListItems: '#item-list tr',
        addButton: '#addBtn',
        updateButton: '#updateBtn',
        deleteButton: '#deleteBtn',
        cancelButton: '#cancelBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totalTL: '#total-tl',
        totalDollar: '#total-dollar'
    };

    const addToHtml = product => {
        return `
        <tr data-id="${product.id}">
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
        updateProduct: function (updatedPrd) {
            let updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach((item) => {
                if (item.getAttribute('data-id') == updatedPrd.id) {
                    item.children[1].textContent = updatedPrd.name;
                    item.children[2].textContent = updatedPrd.price + '$';
                    updatedItem = item;
                }
            });


            return updatedItem;
        },
        clearInputs: function () {
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        clearBG: function () {
            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(item => {
                if (item.classList.contains('bg-info')) {
                    item.classList.remove('bg-info');
                }
            });
        },
        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal: function (total) {
            document.querySelector(Selectors.totalDollar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total * 6.7;
        },
        addProductToForm: function (selectedProduct) {

            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        deleteProduct: function (productToDelete) {

            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach((item) => {
                if (item.getAttribute('data-id') == productToDelete.id) {
                    item.remove();
                }
            });
        },
        addingState: function () {
            UIController.clearBG();

            UIController.clearInputs();

            document.querySelector(Selectors.addButton).style.display = 'inline';
            document.querySelector(Selectors.updateButton).style.display = 'none';
            document.querySelector(Selectors.deleteButton).style.display = 'none';
            document.querySelector(Selectors.cancelButton).style.display = 'none';
        },
        editState: function (selected) {

            UIController.clearBG();

            selected.classList.add('bg-info');
            document.querySelector(Selectors.addButton).style.display = 'none';
            document.querySelector(Selectors.updateButton).style.display = 'inline';
            document.querySelector(Selectors.deleteButton).style.display = 'inline';
            document.querySelector(Selectors.cancelButton).style.display = 'inline';
        }
    }

})();

// App Controller

const App = (function (ProductCtrl, UICtrl, StorageCtrl) {

    const UISelectors = UICtrl.getSelectors();

    // Load Event Listeners
    const loadEventListeners = function () {

        // add product event
        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);

        // edit product click
        document.querySelector(UISelectors.productList).addEventListener('click', productEditClick);

        // edit product submit
        document.querySelector(UISelectors.updateButton).addEventListener('click', productEditSubmit);

        // cancel button click
        document.querySelector(UISelectors.cancelButton).addEventListener('click', cancelUpdate);

        // delete product click
        document.querySelector(UISelectors.deleteButton).addEventListener('click', deleteProductClick);
    }

    const showPrice = () => {
        // Get Total
        const total = ProductCtrl.getTotal();

        // Show Total
        UICtrl.showTotal(total);
    }

    const productAddSubmit = (e) => {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            // Add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // Add item to list
            UICtrl.addProductToList(newProduct);

            // add product to local storage
            StorageCtrl.storeProduct(newProduct);

            // Show price
            showPrice();

            // clear Inputs
            UICtrl.clearInputs();
        }

        e.preventDefault();
    }

    const productEditClick = (e) => {

        if (e.target.classList.contains("edit-product")) {
            const id = e.target.getAttribute("data-id");

            // get selectedProduct
            const product = ProductCtrl.getProductById(id);

            // set current product
            ProductCtrl.setCurrentProduct(product);

            // add product to UI
            UICtrl.addProductToForm(product);

            UICtrl.editState(e.target.parentNode.parentNode);
        }


        e.preventDefault();
    }

    const productEditSubmit = (e) => {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            // update product
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

            // update product on UI
            let item = UICtrl.updateProduct(updatedProduct);

            // Show price
            showPrice();

            // update storage
            StorageCtrl.updateProduct(updatedProduct);

            UICtrl.addingState();
        }

        e.preventDefault();
    }

    const cancelUpdate = (e) => {

        UICtrl.addingState();
        UICtrl.clearBG();

        e.preventDefault();
    }

    const deleteProductClick = (e) => {

        // get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        // delete product
        ProductCtrl.deleteProduct(selectedProduct);

        // delete from UI
        UICtrl.deleteProduct(selectedProduct);

        // show price
        showPrice();

        // delete from storage
        StorageCtrl.deleteProduct(selectedProduct.id);

        UICtrl.addingState();

        if (ProductCtrl.getProducts().length == 0) {
            UICtrl.hideCard();
        }

        e.preventDefault();
    }

    return {
        init: function () {
            console.log('Starting app...');
            UICtrl.addingState();

            // Get products from local storage
            const LSProducts = StorageCtrl.getProducts();

            // Set local storage products to ProductController
            ProductCtrl.setProducts(LSProducts);

            // Get products from ProductController
            const products = ProductCtrl.getProducts();

            if (products.length === 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }


            loadEventListeners();

        }
    }

})(ProductController, UIController, StorageController);

App.init();