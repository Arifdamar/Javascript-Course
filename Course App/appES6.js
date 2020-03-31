// Course class
class Course {
    constructor(title, instructor, image) {
        this.courseId = Math.floor(Math.random() * 10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }

}

// UI class
class UI {
    static addCourseToList(course) {
        const list = document.getElementById('course-list');

        var html = `
            <tr>
                <td><img src="img/${course.image}"/></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
            </tr>
        `;

        list.innerHTML += html;
    }

    static clearControls() {
        document.getElementById('title').value = "";
        document.getElementById('instructor').value = "";
        document.getElementById('image').value = "";
    }

    static deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
            UI.showAlert('The course has been deleted!','danger');
        };
    }

    static showAlert(message, alertType) {
        var alert = `
        <div class="alert alert-${alertType}">
            ${message}
        </div>
    `;

        const row = document.querySelector('.row');
        // beforeBegin, afterBegin, beforeEnd, afterEnd
        row.insertAdjacentHTML('beforeBegin', alert);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 5000);
    }
}

class Storage{

    static getCourses() {
        let courses;

        if(localStorage.getItem('courses')===null) {
            courses = [];
        }
        else{
            courses  = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }

    static displayCourses(){
        const courses = Storage.getCourses();
        courses.forEach(course => {
            UI.addCourseToList(course);
        })
    }

    static addCourse(course){
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses));
    }

    static deleteCourse(element){
        if (element.classList.contains('delete')) {
            const id = element.getAttribute('data-id');

            const courses = Storage.getCourses();

            courses.forEach((course, index) => {
                if(course.courseId == id){
                    courses.splice(index, 1);
                }
            });

            localStorage.setItem('courses', JSON.stringify(courses));
        }
    }
}

document.addEventListener('DOMContentLoaded', Storage.displayCourses);

document.getElementById('new-course').addEventListener('submit',
function(e) {

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    // create course object
    const course = new Course(title, instructor, image);


    if(title === '' || instructor === '' || image === ''){
        UI.showAlert('Please fill the fields!','warning');
    }
    else{
        // add course to list
        UI.addCourseToList(course);
        console.log(course);

        // save to local storage
        Storage.addCourse(course);

        // clear controls
        UI.clearControls();

        UI.showAlert('The course has been added successfully!','success');
    }

    
    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click', function(e) {
    // delete course
    UI.deleteCourse(e.target);
    // delete from local storage
    Storage.deleteCourse(e.target);
});