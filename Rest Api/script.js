document.querySelector('#getOne').addEventListener('click', getOne);
document.querySelector('#getAll').addEventListener('click', getAll);


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