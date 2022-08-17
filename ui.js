function UI() {

}

UI.prototype.display = function(avatar, name, follower, following, repos, bio, location, mail, login) {
    profile = document.getElementById("profile");
    profile.innerHTML = `     
	
	<div class="card card-body mb-3">
		<div class="row">
			<div class="col-md-4">
				<a href="" target="_blank">
					<img class="img-fluid mb-2" src=${avatar}> </a>
				<hr>
				<div id="fullName"><strong>${name}</strong></div>
				<hr>
				<div id="bio">${bio}</div>
			</div>
			<div class="col-md-8">
				<button class="btn btn-secondary">
						Takipçi  <span class="badge badge-light">${follower}</span>
					</button>
				<button class="btn btn-info">
						Takip Edilen  <span class="badge badge-light">${following}</span>
					</button>
				<button class="btn btn-danger">
						Repolar  <span class="badge badge-light">${repos}</span>
					</button>
				<hr>
				<li class="list-group">
					<li class="list-group-item borderzero">
						<img src="images/company.png" width="30px"> <span id="company">${login}</span>

					</li>
					<li class="list-group-item borderzero">
						<img src="images/location.png" width="30px"> <span id="location">${location}</a>
							
						</li>
						<li class="list-group-item borderzero">
							<img src="images/mail.png" width="30px"> <span id="company">${mail}</span>

					</li>

			</div>
		</div>
	</div>`

}
UI.prototype.displayMessage = function() {
    profile = document.getElementById("lead");
    profile = "Böyle Bir Kullanıcı Bulunamadı."
}

UI.prototype.displayRepos = function(user, reponame,stars,forks){
	const repos = document.getElementById("repos");
	repos.innerHTML += `
	<div class="mb-2 card-body">
	<div class="row">
		<div class="col-md-2">
		<span></span>
		<a href="https://github.com/${user}/${reponame}" target = "_blank" id = "repoName">${reponame}</a>
		</div>
		<div class="col-md-6">
			<button class="btn btn-secondary">
				Starlar  <span class="badge badge-light" id="repoStar">${stars}</span>
			</button>

			<button class="btn btn-info">
				Forklar  <span class="badge badge-light" id ="repoFork">${forks}</span>
			</button>
	
		</div>
	</div>

	</div>`;


}
UI.prototype.showError = function(message){
	const div = document.createElement("div");
	const cardBody = document.querySelector(".card-body");
	div.className = "alert alert-danger";
	div.textContent = message;
	cardBody.appendChild(div);
	setTimeout(function(){
		div.remove();
	},3000);
	}

UI.prototype.displaySearch = function(user){
	const search = document.getElementById("last-users");
	search.innerHTML += `<li class="list-group-item">${user}</li>`;
	Storage.addSearchUsers(user);
}

UI.prototype.clearSearch = function(){
	if (confirm("Tüm aramaları silmek istediğinizden emin misiniz?")){
	const search = document.getElementById("last-users");
	search.innerHTML = "";

	}
}