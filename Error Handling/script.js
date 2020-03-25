/*
// ReferenceError
// TypeError
// SyntaxError
// URIError

// Error


var user = {
    name: 'Arif Damar'
}


try {
    //console.log(myFunction());
    console.log(user.name);
    if(!user.email){
        throw new Error('User has no email');
    }
}
catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e)
}
finally{
    console.log('Finally block');
}
*/

document.getElementById('myBtn').addEventListener('click', function(e){

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');

    errors.innerHTML = '';

    try{
        if(name.value.length === 0) {
            throw new Error('Name is required');
        }
        if(name.value.length > 20) {
            throw new Error('Name is too long');
        }
        if(age.value.length === 0) {
            throw new Error('Age is required');
        }
        if (isNaN(age.value)) {
            throw new Error('Age is not valid');
        }

        console.log('Form is submitted');
    }
    catch(e){
        errors.innerHTML = e.message;
    }
    finally{
        name.value = '';
        age.value = '';
    }
    

    e.preventDefault();
})