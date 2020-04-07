/*
async function fn(){
    return "Hello"
}

console.log(fn());

fn()
.then(response => {
    console.log(response);
});
*/

let isError = true;

function getCategory() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!isError){
                resolve({
                    'name': 'phone',
                    'count': 7
                });
            }
            else{
                reject('Failure');
            }
            
        },1000);
    })
}

function getProducts(category) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${category.count} products in ${category.name}`);
        },1000);
    })
}

//getCategory().then(getProducts).then(response => console.log(response)).catch(err => console.log(err));

async function getProduct() {
    try {
        let category = await getCategory();
        let result = await getProducts(category);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

getProduct();