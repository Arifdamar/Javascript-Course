/*
// **HTTP GET and POST**
document.querySelector('#getOne').addEventListener('click', getOne);
document.querySelector('#getAll').addEventListener('click', getAll);
document.querySelector('#postData').addEventListener('click', postData);

function getOne() {
    let id = document.getElementById('postid').value;
    var url = "https://jsonplaceholder.typicode.com/posts/" + id;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let post = JSON.parse(this.responseText);

            let html =
                `
                <div class="card mb-3">
                    <div class="card-header">
                        ${post.id}-${post.title}
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>
                            ${post.body}
                            </p>
                        </blockquote>
                    </div>
                </div>
                `;
            document.querySelector('#results').innerHTML = html;
        }
    }

    xhr.send();
}

function getAll() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let posts = JSON.parse(this.responseText);

            let html = "";

            posts.forEach((post) => {
                html +=
                    `
                <div class="card mb-3">
                    <div class="card-header">
                        ${post.title}
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>
                            ${post.body}
                            </p>
                        </blockquote>
                    </div>
                </div>
                `;
            })

            document.querySelector('#results').innerHTML = html;
        }
    }

    xhr.send();
}

function postData() {
    const data = {
        userId: 1,
        title: 'new title',
        body: 'new body'
    }
    let json = JSON.stringify(data);
    let url = "https://jsonplaceholder.typicode.com/posts/";
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onload = () => {
        if(xhr.status === 201 && xhr.readyState === 4) {
            let post = xhr.responseText;
            console.log(post);
        }
    }
    xhr.send(json);
    
}
*/

/*
// **Asynchronous programming with callback functions**
let products = [{
        id: 1,
        name: 'Samsung Galaxy S9',
        price: 8000
    },
    {
        id: 2,
        name: 'Samsung Galaxy S8',
        price: 7000
    },
    {
        id: 3,
        name: 'Samsung Galaxy S7',
        price: 6000
    }
];

let added = false;

function addProduct(prd, callback) {
    if (added) {
        setTimeout(() => {
            products.push(prd);

            callback(null,prd);
        }, 2000);
    } else {
        callback('500',prd);
    }
}

function getProduct() {
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        })
    }, 1000);
}

addProduct({
    id: 4,
    name: 'Samsung Galaxy S10',
    price: 9000
}, function (err, data) {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log(data);
    }
});
*/


// **Asynchronous programming with Promise**
let products = [{
    id: 1,
    name: 'Samsung Galaxy S9',
    price: 8000
},
{
    id: 2,
    name: 'Samsung Galaxy S8',
    price: 7000
},
{
    id: 3,
    name: 'Samsung Galaxy S7',
    price: 6000
}
];

function addProduct(prd, callback) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            products.push(prd);
            let added = false;
            if (added) {
                resolve();
            } else {
                reject('Error: 500');
            }
        },2000);
    });
}

function getProducts() {
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        })
    }, 1000);
}

addProduct({id: 4,name: 'Samsung Galaxy S10',price: 9000})
.then(getProducts)
.catch(err => console.log(err));