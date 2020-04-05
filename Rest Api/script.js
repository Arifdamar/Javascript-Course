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