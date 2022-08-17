class Github {
    constructor(url, user) {
        this.url = url;
        this.user = user;
    }

    getUsers() {
        fetch(this.url + this.user).then(function(response) {
            return response.json();
        }).then(function(response) {
            if (response.message === "Not Found"){
                ui.showError("Böyle bir kullanıcı bulunamadı");
            }
            else{
            console.log(response);
            ui.display(response.avatar_url, response.name, response.followers, response.following, response.public_repos, response.bio, response.location, response.email, response.login);                    
       } 
        }).catch(function(reject) {
            ui.showError("Böyle bir kullanıcı bulunamadı.");
        })
    }

    getRepos(){

        const userr = this.user;
        fetch(this.url + this.user + "/repos").then(function(response) {
            return response.json();
        }).then(function(response){
            console.log(response);
            var i = 1;
            document.getElementById("repos").innerHTML = "";

            while (i <= 5){
                ui.displayRepos(userr, response[response.length -i].name,response[response.length -i].stargazers_count,response[response.length -i].forks_count); 
                i++;
            }
            ui.displaySearch(userr);



        })  
    }
}