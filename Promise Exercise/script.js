/* Quick Reminder
let p = new Promise((resolve, reject) => {
    if(false) {
        resolve('success');
    }
    else {
        reject('Failure');
    }
});

p.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
*/

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    },1000);
}).then((data) => {
    console.log(data);
    return data * data;
}).then((data) => {
    console.log(data);
    return data * 2;
}).then((data) => {
    console.log(data);
});
*/

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        const phone = {
            name: 'IPhone X',
            price: 10000,
            color: 'Space Gray'
        }
        resolve(phone);
    }
    else{
        const error = new Error('Mom is not happy').message;
        reject(error);
    }
});

const showToFriends = function(phone){
    const message = 'Hey friends this is my new phone ' + phone.name + ' ' + phone.color + ' and it is ' + phone.price + 'TL';
    return Promise.resolve(message);
}

const askMom = function(){
    willGetNewPhone
    .then(showToFriends)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
}

askMom();