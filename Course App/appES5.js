// Course constructor
function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

// UI constructor
function UI() {

}

UI.prototype.addCourseToList = function(course){
    const list = document.getElementById('course-list');

    var html = `
        <tr>
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;

    list.innerHTML += html;
}

UI.prototype.clearControls = function() {
    document.getElementById('title').value = "";
    document.getElementById('instructor').value = "";
    document.getElementById('image').value = "";
}

UI.prototype.deleteCourse = function(element) {
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    };
}

UI.prototype.showAlert = function(message,alertType) {
    var alert = `
        <div class="alert alert-${alertType}">
            ${message}
        </div>
    `;

    const row = document.querySelector('.row');
    // beforeBegin, afterBegin, beforeEnd, afterEnd
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    },5000);
}

document.getElementById('new-course').addEventListener('submit',
function(e) {

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    // create course object
    const course = new Course(title, instructor, image);

    // Create UI
    const ui = new UI();

    if(title === '' || instructor === '' || image === ''){
        ui.showAlert('Please fill the fields!','warning');
    }
    else{
        // add course to list
        ui.addCourseToList(course);

        // clear controls
        ui.clearControls();

        ui.showAlert('The course has been added successfully!','success');
    }

    
    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('The course has been deleted!','danger');
});