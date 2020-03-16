// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('btnDeleteAll');
const taskList = document.querySelector('#task-list');

// call eventlisteners
eventlisteners();

function eventlisteners(){
    // submit event
    form.addEventListener('submit',addNewItem);
}

function addNewItem(e){
    if(input.value===''){
        alert('Please enter a task');
    }

    // Create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // Create a
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // Append a to li
    li.appendChild(a);

    // Append li to ul
    taskList.appendChild(li);

    // clear input
    input.value = '';

    e.preventDefault();
}