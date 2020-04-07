const profile = new Profile();

const searchProfile = document.querySelector('#search');

searchProfile.addEventListener('keyup', event => {
    let text = event.target.value;

    if(text !== '') {
        profile.getProfile(text)
        .then(response => {
            if(response.profile.length === 0) {

            }
            else {
                console.log(response.profile[0]);
            }
        })
    }
})