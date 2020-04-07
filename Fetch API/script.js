/*
// text
function getText() {
    fetch('text.txt')
    .then(response => {
        return response.text();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

getText();
*/

/*
// JSON
function getJSON() {
    fetch('products.json')
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(err => console.log(err));
}

getJSON();
*/

/*
// External API
function getExternalApi() {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => {
        return response.json();
    })
    .then(users => {

        let html = '';

        users.results.forEach(user => {
            html += 
        `
            <div>
                <img src="${user.picture.medium}"/>
                <div>
                    ${user.name.title}
                    ${user.name.first}
                    ${user.name.last}
                </div>
            </div>
        `;

            document.querySelector('#users').innerHTML = html;
        })
    })
    .catch(err => console.log(err));
}

getExternalApi();
*/

function postExternalApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    var data = {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
            title: 'Sample Title',
            body: 'Sample Body'
        }),
        headers: new Headers({
            'content-type': 'application/json'
        })
    }

    fetch(url,data)
    .then(response => {
        console.log(response);
    });
}

postExternalApi();