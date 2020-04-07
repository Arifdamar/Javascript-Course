class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profile-container');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
        
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                    <a href="https://via.placeholder.com/350x150">
                        <img src="https://via.placeholder.com/350x150" class="img-thumbnail">
                    </a>
                </div>

                <div class="col-md-6"
                    <h4>Contact</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                        Name: ${profile.name}
                        </li>
                        <li class="list-group-item">
                        Username: ${profile.username}
                        </li>
                        <li class="list-group-item">
                        E-Mail: ${profile.email}
                        </li>
                        <li class="list-group-item">
                        Address: 
                            ${profile.address.street}
                            ${profile.address.suite}
                            ${profile.address.city}
                            ${profile.address.zipcode}
                        </li>
                        <li class="list-group-item">
                        Website: <a href="${profile.website}">${profile.website}</a>
                        </li>
                        <li class="list-group-item">
                        Company: ${profile.company.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        `;
    }

    showAlert(text) {
        this.alert.innerHTML = `${text} doesn't match!`;
    }

    clear() {
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }

}