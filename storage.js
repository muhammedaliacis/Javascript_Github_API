class Storage{
    static getSearchUsers(){
        let users;
        if (localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));

        }
        return users;
    }
    static addSearchUsers(username){
        let users = this.getSearchUsers();

        if (users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));
        
    }
    static clearSearchUsers(){
        localStorage.removeItem("searched");
        
    }
}