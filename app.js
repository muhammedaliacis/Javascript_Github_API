const ui = new UI();
addEvent();


function addEvent() {
    document.getElementById("github-form").addEventListener("submit", searchUser);
    document.getElementById("clear-last-users").addEventListener("click", function(){
        ui.clearSearch();
        Storage. clearSearchUsers();
    });
    window.onload = function(){
        let users = Storage.getSearchUsers();
        let i = 0;
        while (i < users.length){
            ui.displaySearch(users[i]);
            i++;
        }

    }
}

function searchUser(e) {
    const user = document.getElementById("githubname").value;
    const github = new Github("https://api.github.com/users/", user);
    github.getUsers();
    github.getRepos();


    e.preventDefault();
}