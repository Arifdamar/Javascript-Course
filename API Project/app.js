const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector('#search');

searchProfile.addEventListener('keyup', event => {
    ui.clear();
    let text = event.target.value;

    if(text !== '') {
        profile.getProfile(text)
        .then(response => {
            if(response.profile.length === 0) {
                ui.showAlert(text);
            }
            else {
                ui.showProfile(response.profile[0]);
            }
        })
    }
})